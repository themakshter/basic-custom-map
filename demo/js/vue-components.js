Vue.component('activity', {
  props: ['activity'],
  template:
    `
    <tr>
      <td>
        <input type="text" v-model="activity.name">
      </td>
      <td >
        <input type="text" v-model="activity.imageSource">
      </td>
      <td>
        <input type="text" v-model="activity.position.x">
      </td>
      <td>
        <input type="text" v-model="activity.position.y">
      </td>
      <td>
        <textarea v-model="activity.description" rows="1" cols="50"></textarea>
      </td>
    </tr>`
});

var app = new Vue({
  el: '#vue-app',
  data: {
    mapToLoad: exampleMapToLoad
  },
  methods: {
    drawMap: function () {
      basicCustomMap.createMap('map-svg', this.mapToLoad);
      document.getElementById('map-title').scrollIntoView();
    }
  }
});
