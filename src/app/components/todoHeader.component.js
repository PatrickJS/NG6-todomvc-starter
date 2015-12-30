
class TodoHeaderController {

  constructor() {
    "ngInject";
  }

  onSave(task) {
    if (!task) {
      return;
    }

    this.todos.add(task);
  }
}

export default {
  bindings: {
    todos: '='
  },
  template: `
    <section class="header">
      <h1>todos</h1>
      <header class="header-input">
        <todo-text-input
          placeholder="What needs to get done?"
          on-save="todoHeader.onSave(task)">
        </todo-text-input>
      </header>
    </section>
  `,
  controller: TodoHeaderController
};
