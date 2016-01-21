import cuid from 'cuid';
//import 'core-js/modules/es6.array.find';

export default class TodoList {

  constructor() {
    this.filterState = 'all';
    this.filteredList = this.list = [];
  }

  add(description) {
    const task = new Task(description);
    this.list.push(task);
    this.$refreshList();

    return task;
  }

  toggleAll() {
    const complete = this.countPending() !== 0;
    this.list = this.list.map((task) => {
      task.complete = !!complete;

      return task;
    });

    this.$filter();
  }

  toggleStatus(task) {
    task.complete = !task.complete;
    this.$filter();
  }

  remove(item) {
    this.list = this.list.filter((todo) => todo !== item);
    this.$filter();
  }

  clearCompleted() {
    this.list = this.list.filter((todo) => !todo.complete);
    this.$filter();
  }

  showCompleted() {
    this.filterState = 'completed';
    this.$filter();
  }

  showActive() {
    this.filterState = 'active';
    this.$filter();
  }

  showAll() {
    this.filterState = 'all';
    this.$filter();
  }

  $filter(filterState = this.filterState) {
    this.filterState = filterState;
    const showAll = ('all' === filterState);
    const showCompleted = 'completed' === filterState;

    this.filteredList = this.list.filter((item) => (showAll || showCompleted === item.complete));
  }

  countPending() {
    return this.list.filter((item) => !item.complete).length;
  }

  countCompleted() {
    return this.list.filter((item) => item.complete).length;
  }

  hasTasks() {
    return 0 !== this.list.length;
  }

  $refreshList() {
    this.$filter();
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

