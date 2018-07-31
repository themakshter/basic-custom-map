# basic-custom-map

[![npm (scoped)](https://img.shields.io/npm/v/@pcs4kids/basic-custom-map.svg)](https://www.npmjs.com/package/@pcs4kids/basic-custom-map)

Library using Snap.svg to render basic custom maps with interactive pins on them.

## Features

### Maps drawn from images

You can pass in any sort of images for the map as well as the pin and the library should be able to draw it.

### Hovercards

You can pass in description of the map pin and it will display this in a hovercard component when the user hovers over the circle under the map pin.

### Callback on pin clicks

You can pass in a callback function which can be called with the map pin and its information for you to decide what to do with it.

### Automatic scaling

You should be able to define a coordinate space for the map and place your pins based on that and the library should use this coordinate space to scale the map and the pins no matter what the size of the svg component is.

### Interactive demo for testing

There are scripts and files to allow the user to run a demo for testing purposes from within the repository. Instructions can be found in the [contribution docs](CONTRIBUTING.md).

## Getting Started

To create a map, you need to pass in the id of an svg element and the map object containing the information needed to display it.

```js

let basicCustomMap = require('@pcs4kids/basic-custom-map');

basicCustomMap.createMap('svg-id', mapData);

```

## Map Format

The map should contain a name for the map, a source for the image to use as the map and a coordinate space containing the width and height used for the pins positioned in the map. Lastly, it should contain an array of map pins which will be drawn on it. Each pin should contain a name and description of the pin, which will be shown when hovered on the cirlce below the pin. Moreover, it should contain information about the position, containing x and y coordinates as well as dimensions, given in width and height. Below is the json for an example map to draw, taken from the `demo` folder.

```js

{
  title: 'Fun Island',
  imageSource: 'img/map.png',
  coordinateSpace: {
    width: 750,
    height: 500
  },
  pins:[
      {
          name: 'Giddy Giraffe',
          description: 'Come along for a great ride with our G!',
          imageSource: 'img/animal-giraffe.png',
          position: {
            x: 180,
            y: 200
          },
          dimensions:{
            width: 50,
            height: 70
          },
          callbackFunction : descriptionFunction
      },
      {
          name: 'Mischievous Monkey',
          description: 'Watch out before he steals your wallet!',
          imageSource: 'img/animal-monkey.png',
          position: {
            x: 500,
            y: 350
          },
          dimensions:{
            width: 50,
            height: 65
          },
          callbackFunction : descriptionFunction
      }
  ]
}


```

## Contributing

Before submitting a pull request, please take a moment to look over the [contributing guidelines](CONTRIBUTING.md) first.

## License

`@pcs4kids/basic-custom-map` is available under the [MIT License](https://opensource.org/licenses/MIT)
