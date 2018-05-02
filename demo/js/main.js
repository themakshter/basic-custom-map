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
  name: 'Fun Island',
  background: 'water.jpg',
  overlay: 'island.png',
  activities:[
      {
          name: 'Freaky Forest',
          image: 'forest.png',
          x: 175,
          y: 200
      },
      {
          name: 'Mourny Mountain',
          image: 'mountain.png',
          x: 500,
          y: 450
      },
      {
          name: 'Raging River',
          image: 'river.png',
          x: 300,
          y: 100
      },
      {
          name: 'Creepy Castle',
          image: 'castle.svg',
          x: 500,
          y: 250
      },
      {
          name: 'X Marks the Spot',
          image: 'x-mark.png',
          x: 350,
          y: 300
      }
  ]
}
