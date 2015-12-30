
class TodoListController {
  constructor(todoManager) {
    "ngInject";
    this.manager = todoManager;
  }

  get allChecked() {
    return this.todos.todos.reduce((result, task) => {
      return result && task.complete;
    }, true)
  }

  set allChecked(val) {
    // do nothing?
  }

  toggleCompleteAll() {
    this.manager.toggleAll();
  }
}

export default {
  bindings: {
    todos: '='
  },
  template: `
     <section class="main">
      <input class="toggle-all"
             type="checkbox"
             ng-model="todoList.allChecked"
             ng-model-options="{getterSetter: true}"
             ng-change="todoList.toggleCompleteAll()"
             ng-show="todoList.todos.list.length" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <todo-item todo="todo" ng-repeat="todo in todoList.todos.list"></todo-item>
      </ul>
    </section>
  `,
  controller: TodoListController
}
