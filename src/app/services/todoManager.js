import cuid from 'cuid';
import 'core-js/modules/es6.array.find';

export default class TodoManager {

  constructor() {
    this.list = this.todos =  [];
    this.showCompleted = undefined;
  }

  add(description) {
    var id = cuid();

    this.todos.push({
      id,
      description,
      isCompleted: false
    });

    return id;
  }

  toggleDone(itemID, isCompleted) {
    var item = this.todos.find((item) => item.id === itemID);
    if (!item) {
      throw new Error('No todo find!');
    }

    item.isCompleted = undefined === isCompleted ?
      !item.isCompleted : !!isCompleted
  }

  updateDescription(itemID, description) {
    item.description = description;
  }

  countLeftTodos() {
    return this.todos.filter((item) => !item.isCompleted).length;
  }

  remove(itemID) {
    this.todos = this.todos.filter((todo) => todo.id !== itemID);
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.isCompleted);
  }

  filterTodos(showCompleted) {
    this.showCompleted = showCompleted;
    const showAll = (undefined === showCompleted);

    this.list = this.todos.filter((item) => (showAll || showCompleted === item.isCompleted))
  }

}

