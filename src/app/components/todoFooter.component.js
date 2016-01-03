
class TodoFooterController {
  constructor(todoManager) {
    "ngInject";
    this.todos = todoManager;
  }

  clearCompleted() {
    this.todos.clearCompleted();
  }
}

export default {
  bindings: {},
  template: `
    <footer class="footer">
      <span class="todo-count">
        {{vm.todos.notCompletedCount()}} {{vm.todos.notCompletedCount() == 1 ? 'todo' : 'todos'}} left
      </span>
      <ng-transclude></ng-transclude>
      <button
        class="clear-completed"
        ng-click="vm.clearCompleted()"
        ng-show="vm.todos.completedCount() >= 1">
        Clear Completed ({{ vm.todos.completedCount() }})
      </button>
    </footer>
  `,
  controller: TodoFooterController,
  controllerAs: 'vm'
}
