Vue.component('app-header', {
  template: '#app-header-template',
})

Vue.component('app-usuarios', {
  template: '#app-usuarios-template',
  mounted() {
    axios.get('https://randomuser.me/api/?results=100&gender=male&nat=us&inc=name,email,picture')
      .then(datos => {
      const listado = datos.data.results.map(usuario => {
        return {
          nombre: `${usuario.name.first} ${usuario.name.last}`,
          correo: usuario.email,
          foto: usuario.picture.medium
        }
      });
      this.usuarios = listado;
    });
  },
  data() {
    return {
      usuarios: [],
      busqueda: ''
    }
  },
  computed: {
    filtrarUsuarios() {
      return this.usuarios.filter(usuario => {
        return usuario.nombre.includes(this.busqueda);
      });
    }
  }
})

Vue.component('app-usuario', {
  template: '#app-usuario-template',
  props: ['datos'],
})

const vm = new Vue({
  el: '#app'
})
