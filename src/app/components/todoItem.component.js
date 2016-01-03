
export class TodoItemController {
  constructor(todoList) {
    "ngInject";
    this.todoList = todoList;
    this.isEditing = false;
  }

  onDestroyClick() {
    this.todoList.remove(this.task);
  }

  onSave(description) {
    if (!description) {
      this.todoList.remove(this.task);
    } else {
      this.task.description = description;
    }

    this.isEditing = false;
  }

  toggleStatus() {
    this.todoList.toggleStatus(this.task);
  }

  /**
   * This hack is needed due angular doesn't have one-way bindings (atleast for now)
   * It allows not to override model value from inside this component.
   *
   * @returns {boolean}
   */
  get complete() {
    return this.task.complete;
  }

  /**
   * @param {boolean} val
   */
  set complete(val) {
    // do nothing
  }
}

export default {
  bindings: {
    task: '=todo'
  },
  template: `
    <li ng-class="{'completed': vm.task.complete, 'editing': vm.isEditing}">
      <div class="view" ng-show="!vm.isEditing">
        <input
          class="toggle"
          type="checkbox"
          ng-model="vm.complete"
          ng-model-options="{getterSetter: true}"
          ng-change="vm.toggleStatus()" />
        </input>
        <label ng-dblclick="vm.isEditing = true" class="todo-text" >{{vm.task.description}}</label>
        <button class="destroy" ng-click="vm.onDestroyClick()"></button>
      </div>
      <div class="edit-container" ng-if="vm.isEditing">
        <todo-text-input
          class="edit"
          on-save="vm.onSave(task)"
          value="{{vm.task.description}}">
        </todo-text-input>
      </div>
    </li>
  `,
  controller: TodoItemController,
  controllerAs: 'vm'
}
