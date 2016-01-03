import './app.less';

export class TodoAppController {
  /**
   * @param {TodoList} todoList
   */
  constructor(todoList) {
    "ngInject";
    this.todos = todoList;
  }

  onSave(task) {
    if (!task) return;

    this.todos.add(task);
  }

  onFilter(state) {
    switch (state) {
      case 'all':
        this.todos.showAll();
        break;
      case 'active':
        this.todos.showActive();
        break;
      case 'completed':
        this.todos.showCompleted();
        break;
    }
  }

  onToggleAll() {
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
            on-save="app.onSave(task)">
          </todo-text-input>
        </header>
      </section>
      <section class="main">
        <todo-batch-toggle on-toggle="app.onToggleAll()" todos="app.todos.list" ng-if="app.todos.list.length"></todo-batch-toggle>
        <todo-list todos="app.todos.filteredList"></todo-list>
      </section>
      <todo-footer ng-if="app.todos.list.length" todos="app.todos">
        <todo-list-filter on-filter="app.onFilter(state)" filter-state="app.todos.filterState"></todo-list-filter>
      </todo-footer>
    </section>
  `,
  controller: TodoAppController
};
