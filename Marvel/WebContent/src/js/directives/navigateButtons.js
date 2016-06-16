'use strict'; 

angular
  .module('Chat')
  .directive('backButton', function() {
    return {
       restrict: 'E',
       template:'<button class="btn btn-success pull-left"><i class="fa fa-arrow-left fa-lg"></i></button>',
       link: function(scope, elem, attrs) {
        elem.on('click', function() {
            history.back();
        });
    }
    };
})
.directive('forwardButton', function() {
  return {
     restrict: 'E',
     template:'<button class="btn btn-success pull-right"><i class="fa fa-arrow-right fa-lg"></i></button>',
     link: function(scope, elem, attrs) {
      elem.on('click', function() {
          history.forward();
      });
  }
  };
});;
