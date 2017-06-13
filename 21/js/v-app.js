Vue.component('app-header', {
  template: '#app-header'
})

Vue.component('messages', {
  props: ['type'],
  template: '#app-messages'
})

const vm = new Vue({
  el: '#app',
  data: {
    messages: {
      info: 'Mensaje informativo',
      warning: 'Mensaje de advertencia',
      danger: 'Mensaje de error'
    }
  }
});