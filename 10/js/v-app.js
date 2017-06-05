const vm = new Vue({
  el: 'main',
  data: {
    workable: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    tasks: [
      {name: 'Pasear a Zeus', priority: 'low'},
      {name: 'Aprender Vue', priority: 'high'},
      {name: 'Hacer las compras', priority: 'high'}
    ],
    person: {
      name: 'Christian Medina',
      age: 32,
      email: 'medinachristian@outlook.com',
      married: false
    }
  }
});
