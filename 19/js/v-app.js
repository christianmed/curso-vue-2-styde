Vue.component('my-header', {
  template: '#header-template'
})

Vue.component('users-cards', {
  template: '#users-cards-template',
  mounted() {
    axios.get('https://randomuser.me/api/?results=10&gender=female&nat=us&inc=name,email,picture')
      .then(response => this.users = response.data.results);
  },
  data() {
    return {
      users: []
    }
  }
})

const vm = new Vue({
  el: '#app'
})
