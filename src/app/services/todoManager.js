import cuid from 'cuid';
//import 'core-js/modules/es6.array.find';

export default class TodoManager {

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
    const complete = this.notCompletedCount() !== 0;
    this.list = this.list.map((task) => {
      task.complete = !!complete;

      return task;
    });

    this.$refreshList();
  }

  toggleStatus(task) {
    task.complete = !task.complete;
    this.$refreshList();
  }

  remove(item) {
    this.list = this.list.filter((todo) => todo !== item);
    this.$refreshList();
  }

  clearCompleted() {
    this.list = this.list.filter((todo) => !todo.complete);
    this.$refreshList();
  }

  filter(filterState) {
    this.filterState = filterState;
    const showAll = ('all' === filterState);
    const showCompleted = 'completed' === filterState;

    this.filteredList = this.list.filter((item) => (showAll || showCompleted === item.complete));
  }

  notCompletedCount() {
    return this.list.filter((item) => !item.complete).length;
  }

  completedCount() {
    return this.list.filter((item) => item.complete).length;
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

