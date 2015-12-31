import angular from 'angular';

import todoTextInput from './todoTextInput/todoTextInput';

import todoAdderComponent from './todoAdder.component.js';
import todoListComponent from './todoList.component';
import todoItemComponent from './todoItem.component';
import todoFooterComponent from './todoFooter.component';

export default angular
  .module('app.components', [
    todoTextInput.name
  ])
  .component('todoAdder', todoAdderComponent)
  .component('todoList', todoListComponent)
  .component('todoItem', todoItemComponent)
  .component('todoFooter', todoFooterComponent)
;
