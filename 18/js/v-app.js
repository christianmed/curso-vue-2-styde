'use strict';

Vue.component('app', {
  template: '#app-template',
  mounted() {
    axios.get('https://randomuser.me/api/?results=10&gender=male&name=us&inc=name,picture')
      .then(response => this.personas = response.data.results);
  },
  data() {
    return {
      ganador: false,
      personas: []
    };
  },
  methods: {
    elegirGanador() {
      let cantidad = this.personas.length;
      let indice = Math.floor((Math.random() * cantidad));
      console.log(indice);
      this.ganador = this.personas[indice];
    }
  }
});

const vm = new Vue({
  el: 'main'
});
