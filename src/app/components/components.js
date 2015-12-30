import angular from 'angular';

import todoTextInput from './todoTextInput/todoTextInput';

import todoHeaderComponent from './todoHeader.component';
import todoListComponent from './todoList.component';
import todoItemComponent from './todoItem.component';
import todoFooterComponent from './todoFooter.component';

export default angular
  .module('app.components', [
    todoTextInput.name
  ])
  .component('todoHeader', todoHeaderComponent)
  .component('todoList', todoListComponent)
  .component('todoItem', todoItemComponent)
  .component('todoFooter', todoFooterComponent)
;
