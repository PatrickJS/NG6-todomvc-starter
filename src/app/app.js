import angular from 'angular';
import 'angular-component';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  Components.name
])

.component('app', AppComponent);
