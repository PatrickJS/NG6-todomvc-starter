import cuid from 'cuid';
//import 'core-js/modules/es6.array.find';

export default class TodoManager {

  constructor() {
    this.filterState = 'all';
    this.todos = this.list = [];
    this.showCompleted = undefined;
  }

  add(description) {
    const task = new Task(description);
    this.todos.push(task);
    this.$refreshList();

    return task;
  }

  toggleAll() {
    const complete = this.notCompletedCount() !== 0;
    this.todos = this.todos.map((task) => {
      task.complete = !!complete;

      return task;
    });

    this.$refreshList();
  }

  notCompletedCount() {
    return this.todos.filter((item) => !item.complete).length;
  }

  completedCount() {
    return this.todos.filter((item) => item.complete).length;
  }

  remove(item) {
    this.todos = this.todos.filter((todo) => todo !== item);
    this.$refreshList();
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.complete);
    this.$refreshList();
  }

  filter(filterState) {
    this.filterState = filterState;
    const showAll = ('all' === filterState);
    const showCompleted = 'completed' === filterState;

    this.list = this.todos.filter((item) => (showAll || showCompleted === item.complete));
  }

  $refreshList() {
    this.filter(this.filterState);
  }

}

class Task {
  constructor(description) {
    this.id = cuid();
    this.description = description;
    this.isCompleted = false;
  }

  get complete() {
    return this.isCompleted;
  }

  set complete(val) {
    this.isCompleted = !!val;
  }
}

