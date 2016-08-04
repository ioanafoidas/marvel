angular
  .module('Chat', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ui.select',
    'ngCookies'
  ])

.run(['$rootScope', '$state', '$timeout', '$window', function($rootScope, $state, $timeout, $window) {

  //Save the messages to sessionStorage before the page is refreshed
  window.onbeforeunload = function(event) {
    //$rootScope.$broadcast('savestate');
    $rootScope.$broadcast('logout');
  };


  angular.element($window).bind('focus', function() {
    $rootScope.isTabActive = true;
  }).bind('blur', function() {
    $rootScope.isTabActive = false;
  });

  $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {

    if (error === "Not Authorized") {
      $state.go("admin");
    }
  });

}]);
