import './app.less';

class TodoAppController {
  constructor(todoManager) {
    "ngInject";
    this.todos = todoManager;
  }

  addTask(task) {
    if (!task) return;

    this.todos.add(task);
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
        <todo-batch-toggle on-toggle="app.toggleAll()" todos="app.todos.todos" ng-if="app.todos.todos.length"></todo-batch-toggle>
        <todo-list todos="app.todos"></todo-list>
      </section>
      <todo-footer ng-if="app.todos.todos.length" todos="app.todos"></todo-footer>
    </section>
  `,
  controller: TodoAppController
};
