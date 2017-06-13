Vue.component('app-header', {
  template: '#app-header-template'
})

Vue.component('app-message', {
  template: '#app-message-template',
  props: ['type'],
  data() {
    return {
      messages: {
        info: 'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit ',
        warning: 'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
        danger: 'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }
    }
  }
})

const vm = new Vue({
  el: '#app'
});
