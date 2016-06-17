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


})

.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {

  window.onload = function(event)
  {

  }

    $rootScope.$on('$stateChangeStart',  function (event, toState, toParams, fromState, fromParams) {
      console.log("route change start");

        if (!Auth.isLoggedIn() && toState.name !="signup") {
          console.log(toState);
            console.log('DENY');
            //$rootScope.$emit('ShowLoginModal');
            //event.preventDefault();


        }
    });
}]);
