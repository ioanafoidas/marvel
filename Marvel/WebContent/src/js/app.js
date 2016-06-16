angular
  .module('Chat', [
    'ui.router',
    'ui.bootstrap',
    'smoothScroll',
    'ngSanitize',
    'ui.select',
    'ngCookies'
  ])

.run(function($rootScope) {


  //let everthing know that we need to save state now. For saving the messages to sessionStorage
  window.onbeforeunload = function(event) {
    $rootScope.$broadcast('savestate');
  };


});
