'use strict';
angular
  .module('Chat')
  .service('GetRequest', ['$http', '$q', '$timeout', 'usersService', function($http, $q, $timeout, usersService) {

    this.get_data = function(url) {
      var d = $q.defer();
      $http.get(url).then(function(data) {
        d.resolve(data);
      });
      return d.promise;
    };


    // (function get_users_poll() {
    //   $http.get('users').success(function(data) {
    //     usersService.allUsers.push(data);
    //     $timeout(get_data_poll, 1000);
    //   });
    // })();
    //
    //
    // (function get_messages_poll() {
    //   $http.get('messages').success(function(data) {
    //     messageService.allMessages.push(data);
    //     $timeout(get_data_poll, 1000);
    //   });
    // })();

  }]);
