angular
  .module('Chat').factory('messageService', ['$rootScope', '$timeout', function($rootScope, $timeout) {

    var service = {
      allMessages: [],

      SaveState: function() {
        if (service.allMessages) {
          sessionStorage.allMessages = angular.toJson(service.allMessages);
        }
      },

      RestoreState: function() {
        if (sessionStorage.allMessages != undefined) {
          service.allMessages = angular.fromJson(sessionStorage.allMessages);
          $timeout(function() {
              $rootScope.$emit("messages refreshed");
          }, 500, false);

        }
      }
    }

    $rootScope.$on("savestate", service.SaveState);
    service.RestoreState(); //always reload messages when service is initialized
    $rootScope.$on("restorestate", service.RestoreState); //reload content when routing

    return service;
  }]);
