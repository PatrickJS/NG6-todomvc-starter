import angular from 'angular';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

import AppComponent from './app.component';

angular.module('app', [
  Components.name,
  services.name
])
.component('app', AppComponent);

angular.bootstrap(document.body, ['app'])
