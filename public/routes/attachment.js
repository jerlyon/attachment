'use strict';

angular.module('mean.attachment').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('attachment example page', {
      url: '/attachment/example',
      templateUrl: 'attachment/views/index.html'
    });
  }
]);
