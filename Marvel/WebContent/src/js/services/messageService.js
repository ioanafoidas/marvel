angular
  .module('Chat').factory('messageService', ['$rootScope', function ($rootScope) {

    var service = {

        allMessages: [],

        SaveState: function () {
            sessionStorage.allMessages = angular.toJson(service.allMessages);
        },

        RestoreState: function () {
            service.allMessages = angular.fromJson(sessionStorage.allMessages);
        }
    }

    $rootScope.$on("savestate", service.SaveState);
     service.RestoreState(); //always reload messages when service is initialized

    return service;
}]);
