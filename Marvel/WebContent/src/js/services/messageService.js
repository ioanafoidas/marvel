angular
  .module('Chat').factory('messageService', ['$rootScope', function($rootScope) {

    var service = {

      allMessages: [],

      SaveState: function() {
        if (service.allMessages) {
        //  sessionStorage.allMessages = angular.toJson(service.allMessages);
          console.log("state saved");
        }
      },

      RestoreState: function() {
        if (sessionStorage.allMessages != undefined) {
          service.allMessages = angular.fromJson(sessionStorage.allMessages);
        }
      }
    }

    $rootScope.$on("savestate", service.SaveState);
    service.RestoreState(); //always reload messages when service is initialized

    return service;
  }]);
