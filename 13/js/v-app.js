const vm = new Vue({
  el: 'main',
  data: {
    newTask: '',
    tasks: [
      {title: 'Hacer las compras', completed: false},
      {title: 'Aprender Vue.js', completed: false},
      {title: 'Aprender Firebase', completed: false},
      {title: 'Dominar ES6', completed: false},
      {title: 'Salir a correr', completed: false},
    ]
  },
  methods: {
    addtask() {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    completeTask(task) {
      task.completed = !task.completed;
    }
  },
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    }
  }
});
