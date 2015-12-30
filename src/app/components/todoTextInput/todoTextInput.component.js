import './todoTextInput.less';

class TodoTextInputController {
  constructor() {
    this.text = this.value || '';
  }

  save() {
    this.onSave({
      task: this.text
    });

    this.text = '';
  }

  onEscape() {
    this.onSave({
      task: this.value
    });
  }
}

export default {
  bindings: {
    placeholder: '@',
    value: '@',
    onSave: '&'
  },
  template: `
    <form ng-submit="todoTextInput.save()">
      <input  class="new-todo" autofocus=""
              on-escape="todoTextInput.onEscape()"
              ng-model="todoTextInput.text"
              placeholder="{{todoTextInput.placeholder}}" />
    </form>
  `,
  controller: TodoTextInputController
}
