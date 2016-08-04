angular
  .module('Chat').factory('messageService', ['$rootScope', '$timeout', '$state', function($rootScope, $timeout, $state) {

    var service = {
      allMessages: [],

      SaveState: function() {
      //  if (service.allMessages) {
        //  sessionStorage.allMessages = angular.toJson(service.allMessages);
        //}
      },

      RestoreState: function() {
        if (sessionStorage.allMessages != undefined) {
        //  service.allMessages = angular.fromJson(sessionStorage.allMessages);
        //  $rootScope.$emit("messages refreshed");
        }
      }
    }

  //  $rootScope.$on("savestate", service.SaveState);
  //  service.RestoreState(); //always reload messages when service is initialized

    return service;
  }]);
