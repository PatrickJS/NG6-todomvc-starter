
export class TodoItemController {
  constructor(todoManager) {
    "ngInject";
    this.manager = todoManager;
    this.isEditing = false;
  }

  onDestroyClick() {
    this.manager.remove(this.task);
  }

  onSave(description) {
    if (!description) {
      this.manager.remove(this.task);
    } else {
      this.task.description = description;
    }

    this.isEditing = false;
  }

  toggleStatus() {
    this.manager.toggleStatus(this.task);
  }

  get complete() {
    return this.task.complete;
  }

  set complete(val) {
    // do nothing
  }
}

export default {
  bindings: {
    task: '=todo'
  },
  template: `
    <li ng-class="{'completed': todoItem.task.complete, 'editing': todoItem.isEditing}">
      <div class="view" ng-show="!todoItem.isEditing">
        <input
          class="toggle"
          type="checkbox"
          ng-model="todoItem.complete"
          ng-model-options="{getterSetter: true}"
          ng-change="todoItem.toggleStatus()" />
        </input>
        <label ng-dblclick="todoItem.isEditing = true" class="todo-text" >{{todoItem.task.description}}</label>
        <button class="destroy" ng-click="todoItem.onDestroyClick()"></button>
      </div>
      <div class="edit-container" ng-if="todoItem.isEditing">
        <todo-text-input
          class="edit"
          on-save="todoItem.onSave(task)"
          value="{{todoItem.task.description}}">
        </todo-text-input>
      </div>
    </li>
  `,
  controller: TodoItemController
}
