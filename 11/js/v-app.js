const vm = new Vue({
  el: 'main',
  data: {
    message: '',
    tasks: [
      {
        name: 'Aprender JS',
        priority: false,
        range: 100
      },
      {
        name: 'Aprender Vue',
        priority: true,
        range: 300
      },
      {
        name: 'Aprender React',
        priority: true,
        range: 200
      },
      {
        name: 'Aprender Angular',
        priority: false,
        range: 150
      }
    ]
  },
  computed: {
    messageAlReves() {
      return this.message.split('').reverse().join('');
    },
    taskPriority() {
      return this.tasks.filter(task => task.priority);
    },
    taskRangeLow() {
      return this.tasks.sort((a, b) => a.range - b.range);
    },
    taskRangeHigh() {
      return this.tasks.sort((a, b) => b.range - a.range);
    }
  }
});
