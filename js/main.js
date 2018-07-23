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

var descriptionFunction = function(name){
  alert(name + " called");

}

var exampleMapToLoad = {
  title: 'Fun Island',
  imageSource: 'img/map.png',
  pins:[
      {
          name: 'Giddy Giraffe',
          description: 'Come along for a great ride with our G!',
          imageSource: 'img/animal-giraffe.png',
          position: {
            x: 180,
            y: 200
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
          callbackFunction : descriptionFunction
      },
      {
          name: 'Crafty Cheetah',
          description: 'Once a Cheetah, always a Cheetah!',
          imageSource: 'img/animal-cheetah.png',
          position: {
            x: 300,
            y: 75
          },
          callbackFunction : descriptionFunction
      },
      {
          name: 'Pristine Panther',
          description: 'He\'s got nothing on our boy Pink Panther!',
          imageSource: 'img/animal-panther.png',
          position: {
            x: 500,
            y: 110
          },
          callbackFunction : descriptionFunction
      },
      {
          name: 'Baddie Bear',
          description: 'Big Bad Bear waits for nobody!',
          imageSource: 'img/animal-bear.png',
          position: {
            x: 350,
            y: 275
          },
          callbackFunction : descriptionFunction
      }
  ]
}
