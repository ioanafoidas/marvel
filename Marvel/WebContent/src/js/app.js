angular
  .module('Chat', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ui.select',
    'ngCookies'
  ])

.run(['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {

        //Save the messages to sessionStorage before the page is refreshed
        window.onbeforeunload = function(event) {
          $rootScope.$broadcast('savestate');
          $rootScope.$broadcast('logout');

        };

        $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {

          if (error === "Not Authorized") {
            $state.go("admin");
          }
        });

        }]);
