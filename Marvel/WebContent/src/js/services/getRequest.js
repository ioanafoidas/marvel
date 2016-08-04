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
        $timeout(get_users_poll, 500);
      });
    })();



    (function get_messages_poll() {
      var date;
      if (messageService.allMessages.length > 0) {
        date = messageService.allMessages[messageService.allMessages.length - 1].date; //get all messages from the last received message
      } else {
        var date = Date.now() - 43200000; //last 12 hours
      }

      $http.get('../rest/messages/all/' + date).success(function(data) {

        if (data.message.length > 0) {
          
          $rootScope.isNewMessage = true;
          for (var i = 0; i < data.message.length; i++) { //push the objects from the response array to the allMessages array in the UI
            if (!isNaN(data.message[i].body)) {
              data.message[i].body = data.message[i].body.toString(); //to solve linky issue
            }
            messageService.allMessages.push(data.message[i]);

            if (usersService.currentUser.name == data.message[i].user.name) {
              $rootScope.isCurrentUser = true;
            } else {
              $rootScope.isCurrentUser = false;
            }
          }
        } else {
          $rootScope.isNewMessage = false;
        }




        $rootScope.$emit("messages refreshed"); //tell the controller there are new messages

        $timeout(get_messages_poll, 300);
      });
    })();

  }]);
