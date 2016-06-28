'use strict';
angular
  .module('Chat')
  .service('GetRequest', ['$http', '$q', '$timeout', 'usersService', 'messageService', '$rootScope', function($http, $q, $timeout, usersService, messageService, $rootScope) {

    this.get_data = function(url) {
      var d = $q.defer();
      $http.get(url).then(function(data) {
        d.resolve(data);
      });
      return d.promise;
    };


    (function get_users_poll() {
      $http.get('../rest/users/all').success(function(data) {
        usersService.allUsers = data.user;
        $rootScope.$emit("users refreshed");
        $timeout(get_users_poll, 2000);
      });
    })();


    (function get_messages_poll() {
      var date = Date.now() - 200; //get all messages from the last 500ms

      $http.get('../rest/messages/all/' + date).success(function(data) {
        if (data.message.length > 0) {
          for (var i = 0; i < data.message.length; i++) { //push the objects from the response array to the allMessages array in the UI

            var date = new Date(data.message[i].date);
            var month = date.getMonth() + 1
            data.message[i].date = date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            messageService.allMessages.push(data.message[i]);
            $rootScope.$emit("messages refreshed"); //tell the controller there are new messages
          }
        }
        $timeout(get_messages_poll, 200);
      });
    })();

  }]);
