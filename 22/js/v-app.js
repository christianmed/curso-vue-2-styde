Vue.component('app-header', {
  template: '#app-header'
})

Vue.component('messages', {
  props: ['type'],
  template: '#app-messages',
  data() {
    return {
      messages: {
        info: 'MENSAJE INFORMATIVO',
        warning: 'MENSAJE DE ADVERTENCIA',
        danger: 'MENSAJE DE ERROR'
      }
    }
  }
})

const vm = new Vue({
  el: '#app'
});