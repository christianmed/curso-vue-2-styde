const vm = new Vue({
  el: 'main',
  mounted() {
    this.loadUsers();
  },
  data: {
    users: []
  },
  methods: {
    loadUsers() {
      this.$http.get('https://randomuser.me/api/?results=5')
        .then(response => {
        this.users = response.body.results;
      });
    }
  }
});
