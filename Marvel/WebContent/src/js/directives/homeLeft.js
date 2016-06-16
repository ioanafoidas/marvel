'use strict';

angular
    .module('Chat')
    .directive('homeLeft', function() {
        return {
            restrict: 'E',
            templateUrl:'views/directives/homeLeft.html'
        };
    });
