import angular from 'angular';

import todoTextInputComponent from './todoTextInput.component';
import autofocus from './autofocus.directive';
import onEscape from './escape.directive';

export default angular
  .module('app.todoTextInput', [])
  .component('todoTextInput', todoTextInputComponent)
  .directive({
    autofocus, onEscape
  });
