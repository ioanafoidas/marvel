'use strict';
angular
  .module('Chat')
  .service('GetRequest', ['$http', '$q', '$timeout', 'usersService', 'messageService', '$rootScope', function($http, $q, $timeout, usersService, messageService,$rootScope) {



    this.get_data = function(url) {
      var d = $q.defer();
      $http.get(url).then(function(data) {
        d.resolve(data);
      });
      return d.promise;
    };


    (function get_users_poll() {
      $http.get('../rest/users/all').success(function(data) {
        //Todo get only users after the last poll
        //console.log(data.user);

        //usersService.allUsers = [];
        usersService.allUsers = data.user;
        $rootScope.$emit("users refreshed");
        $timeout(get_users_poll, 5000);
      });
    })();


    (function get_messages_poll() {

      $http.get('../rest/messages/all/'+Date.now()-3000).success(function(data) {
          //Todo get only messages after the last poll
       messageService.allMessages.push(data);
       //console.log(messageService.allMessages);
        $timeout(get_messages_poll, 3000);
      });
    })();

  }]);
