'use strict';

angular
    .module('Chat')
    .directive('dropDown', function($window) {
        return {
            restrict: 'AC',
            link: function(scope, elem, attr) {
                var slideSelector = angular.element(document).find('.dropdown-menu');
                elem.on('mouseover mouseout', function() {
                    slideSelector.stop(true).slideToggle(350);
                });

            }
        }
    });
