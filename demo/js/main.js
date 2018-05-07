var mapToLoadSchema = {
  name: 'string',
  background: 'svg',
  overlay: 'svg',
  activities: [
      {
          name: 'string',
          image: 'svg',
          x: 'int',
          y: 'int'
      }
  ]
};

var exampleMapToLoad = {
  title: 'Fun Island',
  imageSource: 'img/map.jpg',
  pins:[
      {
          name: 'Freaky Forest',
          imageSource: 'img/forest.png',
          position: {
            x: 175,
            y: 200
          }
      },
      {
          name: 'Mourny Mountain',
          imageSource: 'img/mountain.png',
          position: {
            x: 500,
            y: 450
          }
      },
      {
          name: 'Raging River',
          imageSource: 'img/river.png',
          position: {
            x: 300,
            y: 100
          }
      },
      {
          name: 'Creepy Castle',
          imageSource: 'img/castle.svg',
          position: {
            x: 500,
            y: 250
          }
      },
      {
          name: 'X Marks the Spot',
          imageSource: 'img/x-mark.png',
          position: {
            x: 350,
            y: 300
          }
      }
  ]
}
