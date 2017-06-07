'use strict';

Vue.component('app', {
  template: '#app-template',
  mounted() {
    axios.get('https://reqres.in/api/users?per_page=5')
      .then(response => this.personas = response.data.data);
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
