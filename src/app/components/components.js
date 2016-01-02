import angular from 'angular';

import todoTextInput from './todoTextInput/todoTextInput';

import todoListComponent from './todoList.component';
import todoItemComponent from './todoItem.component';
import todoFooterComponent from './todoFooter.component';
import todoBatchToggle from './todoBatchToggle.component';

export default angular
  .module('app.components', [
    todoTextInput.name
  ])
  .component('todoList', todoListComponent)
  .component('todoItem', todoItemComponent)
  .component('todoFooter', todoFooterComponent)
  .component('todoBatchToggle', todoBatchToggle)
;
