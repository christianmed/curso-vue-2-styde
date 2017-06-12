Vue.component('my-header', {
  template: '#header-template'
})

Vue.component('users-cards', {
  template: '#users-cards-template',
  mounted() {
    axios.get('https://randomuser.me/api/?results=500&gender=female&nat=us&inc=name,email,picture')
      .then(response => this.users = response.data.results);
  },
  data() {
    return {
      titulo: 'Participantes',
      ganador: false,
      users: []
    }
  },
  methods: {
    elegirGanador() {
      let cantidad = this.users.length;
      let indice = Math.floor((Math.random() * cantidad));
      this.ganador = this.users[indice];
      this.titulo = 'Ganador';
    }
  }
})

const vm = new Vue({
  el: '#app'
})
