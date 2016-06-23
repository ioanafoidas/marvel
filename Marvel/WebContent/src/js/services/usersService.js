angular
  .module('Chat').factory('usersService', function() {

    var service = {
      allUsers: [],
      currentUser: {}
    }

    return service;




  });
