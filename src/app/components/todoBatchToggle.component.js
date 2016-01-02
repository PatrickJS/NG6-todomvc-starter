
export class BatchTogglerController {

  get allChecked() {
    return this.todos.reduce((result, task) => result && task.complete, true);
  }

  set allChecked(val) {
    // do nothing?
  }
}

export default {
  bindings: {
    onToggle: '&',
    todos: '='
  },
  template: `
    <input class="toggle-all"
           type="checkbox"
           ng-model="todoBatchToggle.allChecked"
           ng-model-options="{getterSetter: true}"
           ng-change="todoBatchToggle.onToggle()" />
    <label for="toggle-all">Mark all as complete</label>
  `,
  controller: BatchTogglerController
}
