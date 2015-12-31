
class TodoAdderController {

  onSave(task) {
    if (!task) {
      return;
    }

    this.onAdd({task});
  }
}

export default {
  bindings: {
    onAdd: '&'
  },
  template: `
    <header class="header-input">
      <todo-text-input
        placeholder="What needs to get done?"
        on-save="todoAdder.onSave(task)">
      </todo-text-input>
    </header>
  `,
  controller: TodoAdderController
};
