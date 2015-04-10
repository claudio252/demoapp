'use strict';

angular.module('demoapp')
  .controller('AboutCtrl', function ($scope) {
    $scope.address = null;
    $scope.phone = null;

    $scope.initialize = function () {
      $scope.address = 'La Paz, Bolivia';
      $scope.phone = '+59177502002';
    };

    $scope.initialize();
  });
