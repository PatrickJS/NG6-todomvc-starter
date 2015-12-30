
class TodoFooterController {
  constructor(todoManager) {
    "ngInject";
    this.todos = todoManager;
    this.filterState = 'all';
  }

  filter(state) {
    this.filterState = state;
    this.todos.filter(this.filterState);
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
        {{todoFooter.todos.notCompletedCount()}} {{todoFooter.todos.notCompletedCount() == 1 ? 'todo' : 'todos'}} left
      </span>
      <ul class="filters">
        <li><a href ng-class="{selected: todoFooter.filterState == 'all'}" ng-click="todoFooter.filter('all')">All</a></li>
        <li><a href ng-class="{selected: todoFooter.filterState == 'active'}" ng-click="todoFooter.filter('active')">Active</a></li>
        <li><a href ng-class="{selected: todoFooter.filterState == 'completed'}" ng-click="todoFooter.filter('completed')">Completed</a></li>
      </ul>
      <button
        class="clear-completed"
        ng-click="todoFooter.clearCompleted()"
        ng-show="todoFooter.todos.completedCount() >= 1">
        Clear Completed ({{ todoFooter.todos.completedCount() }})
      </button>
    </footer>
  `,
  controller: TodoFooterController
}
