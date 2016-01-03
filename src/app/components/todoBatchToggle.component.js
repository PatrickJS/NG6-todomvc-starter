
export class BatchTogglerController {

  /**
   * This hack is needed due angular doesn't have one-way bindings (atleast for now)
   * It allows not to override model value from inside this component.
   *
   * @returns {boolean}
   */
  get allChecked() {
    return this.todos.reduce((result, task) => result && task.complete, true);
  }

  /**
   * @param {boolean} val
   */
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
           ng-model="vm.allChecked"
           ng-model-options="{getterSetter: true}"
           ng-change="vm.onToggle()" />
    <label for="toggle-all">Mark all as complete</label>
  `,
  controller: BatchTogglerController,
  controllerAs: 'vm'
}
