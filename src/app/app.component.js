import './app.less';

class TodoAppController {
  constructor(todoManager) {
    "ngInject";
    this.todos = todoManager;
  }
}

export default {
  template: `
      <section class="todoapp">
        <todo-header todos="app.todos"></todo-header>
        <todo-list todos="app.todos"></todo-list>
        <todo-footer ng-if="app.todos.todos.length" todos="app.todos"></todo-footer>
      </section>
  `,
  controller: TodoAppController
};
