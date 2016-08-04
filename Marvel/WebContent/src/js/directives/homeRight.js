'use strict';

angular
  .module('Chat')
  .directive('homeRight', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/homeRight.html',
      link: function(scope, elem, attr) {
      }
    };
  });
