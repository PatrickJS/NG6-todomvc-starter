
class TodoFooterController {
  /**
   * @param {TodoList} todoList
   */
  constructor(todoList) {
    "ngInject";
    this.todos = todoList;
  }

  clearCompleted() {
    this.todos.clearCompleted();
  }
}

export default {
  bindings: {},
  transclude: true,
  template: `
    <footer class="footer">
      <span class="todo-count">
        {{vm.todos.countPending()}} {{vm.todos.countPending() == 1 ? 'todo' : 'todos'}} left
      </span>
      <ng-transclude></ng-transclude>
      <button
        class="clear-completed"
        ng-click="vm.clearCompleted()"
        ng-show="vm.todos.countCompleted() >= 1">
        Clear Completed ({{ vm.todos.countCompleted() }})
      </button>
    </footer>
  `,
  controller: TodoFooterController,
  controllerAs: 'vm'
}
