import angular from 'angular';

import todoManager from './todoManager';

export default angular
  .module('app.services', [])
  .service({
    todoManager
  });
