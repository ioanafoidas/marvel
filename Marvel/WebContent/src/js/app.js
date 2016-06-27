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
  //Save the messages to sessionStorage before the page is refreshed
  window.onbeforeunload = function(event) {
    $rootScope.$broadcast('savestate');

  };

  window.onunload = function(event) {
    $rootScope.$broadcast('logout');

  };
})

.run(['$rootScope', '$state', 'Auth', '$timeout', function($rootScope, $state, Auth, $timeout) {
  // window.onload = function(event) {
  //   if (!Auth.isLoggedIn()) {
  //     console.log('DENY');
  //   $rootScope.$emit('ShowLoginModal');   //$on is on menu.js directive controller
  //   //console.log('DENY2');
  //   //  event.preventDefault();
  //   }
  // }

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

    if (!Auth.isLoggedIn() && toState.name != "signup" && fromState.name) {
       console.log('DENY');
    $rootScope.$emit('ShowLoginModal');
    //  event.preventDefault();
    }
  });
}]);
