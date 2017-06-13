Vue.component('home', {
  template: '#home-template'
})

Vue.component('about', {
  template: '#about-template'
})

Vue.component('works', {
  template: '#works-template'
})

Vue.component('contact', {
  template: '#contact-template'
})

const vm = new Vue({
  el: '#app',
  data: {
    currentView: 'contact'
  }
})
