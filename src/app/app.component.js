import './app.less';

class TodoAppController {
  constructor(todoManager) {
    "ngInject";
    this.todos = todoManager;
  }

  addTask(task) {
    this.todos.add(task);
  }
}

export default {
  template: `
      <section class="todoapp">
        <section class="header">
          <h1>todos</h1>
          <todo-adder on-add="app.addTask(task)"></todo-adder>
        </section>
        <todo-list todos="app.todos"></todo-list>
        <todo-footer ng-if="app.todos.todos.length" todos="app.todos"></todo-footer>
      </section>
  `,
  controller: TodoAppController
};
