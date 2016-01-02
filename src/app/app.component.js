import './app.less';

class TodoAppController {
  constructor(todoManager) {
    "ngInject";
    this.todos = todoManager;
    this.filterState = 'all';
  }

  addTask(task) {
    if (!task) return;

    this.todos.add(task);
  }

  filter(state) {
    console.log('filter', state);
    this.todos.filter(state);
    this.filterState = state;
  }

  toggleAll() {
    this.todos.toggleAll();
  }
}

export default {
  template: `
    <section class="todoapp">
      <section class="header">
        <h1>todos</h1>
        <header class="header-input">
          <todo-text-input
            placeholder="What needs to get done?"
            on-save="app.addTask(task)">
          </todo-text-input>
        </header>
      </section>
      <section class="main">
        <todo-batch-toggle on-toggle="app.toggleAll()" todos="app.todos.list" ng-if="app.todos.list.length"></todo-batch-toggle>
        <todo-list todos="app.todos.filteredList"></todo-list>
      </section>
      <todo-footer ng-if="app.todos.list.length" todos="app.todos">
        <todo-list-filter on-filter="app.filter(state)" filter-state="app.filterState"></todo-list-filter>
      </todo-footer>
    </section>
  `,
  controller: TodoAppController
};
