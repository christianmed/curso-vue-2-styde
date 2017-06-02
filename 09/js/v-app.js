Vue.component('task', {
  template: `
    <li class="collection-item">
      {{ task.title }}
      <span v-on:click="$emit('remove')" class="secondary-content">
        <i class="material-icons close">close</i>
      </span>
    </li>
  `,
  props: ['task']
})

const vm = new Vue({
  el: '#app',
  data: {
    newTask: '',
    taskList: [
      {title: 'Tarea a realizar 1', completed: false},
      {title: 'Tarea a realizar 2', completed: false},
      {title: 'Tarea a realizar 3', completed: false},
    ]
  },
  methods: {
    addTask: function () {
      if (this.newTask.length != '' && this.newTask.length > 0) {
        this.taskList.push(
          { title: this.newTask, completed: false }
        );
        this.newTask = '';
      }
    },
    removeTask: function (index) {
      this.taskList.splice(index, 1);
    }
  }
});
