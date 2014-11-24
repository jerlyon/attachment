'use strict';

angular.module('mean.attachment').controller('AttachmentController', ['$scope', 'Global', 'Attachment',
  function($scope, Global, Attachment) {
    $scope.global = Global;
    $scope.package = {
      name: 'attachment'
    };
  }
]);
