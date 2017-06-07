Vue.component('app', {
  template: `
    <p>prueba</p>
  `,
  mounted() {
    axios.get('https://reqres.in/api/users?per_page=5')
      .then(response => console.log(response));
  },
  data() {
    return {

    }
  }
})

const vm = new Vue({
  el: 'main'
});
