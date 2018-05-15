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
  imageSource: 'img/map.png',
  pins:[
      {
          name: 'Giddy Giraffe',
          imageSource: 'img/animal-giraffe.png',
          position: {
            x: 180,
            y: 200
          }
      },
      {
          name: 'Mischievous Monkey',
          imageSource: 'img/animal-monkey.png',
          position: {
            x: 500,
            y: 350
          }
      },
      {
          name: 'Crafty Cheetah',
          imageSource: 'img/animal-cheetah.png',
          position: {
            x: 300,
            y: 75
          }
      },
      {
          name: 'Pristine Panther',
          imageSource: 'img/animal-panther.png',
          position: {
            x: 500,
            y: 110
          }
      },
      {
          name: 'Baddie Bear',
          imageSource: 'img/animal-bear.png',
          position: {
            x: 350,
            y: 275
          }
      }
  ]
}
