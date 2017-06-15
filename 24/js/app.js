Vue.component('todo-list', {
  template: '#todo-list-template',
  data() {
    return {
      newTodo: '',
      todoList: []
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '' && this.newTodo.trim().length > 3) {
        this.todoList.push({ title: this.newTodo, complete: false });
        this.newTodo = '';
      }
    }
  },
  computed: {
    incompletedTodoList() {
      return this.todoList.filter(todo => !todo.complete)
    },
    completedTodoList() {
      return this.todoList.filter(todo => todo.complete)
    }
  }
})

const vm = new Vue({
  el: '#app'
})
