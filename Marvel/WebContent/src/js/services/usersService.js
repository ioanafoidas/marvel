angular
  .module('Chat').factory('usersService', ['PostRequest', '$rootScope', function(PostRequest, $rootScope) {

    var service = {
      allUsers: [],
      currentUser: {},

      Logout: function() {
        //synchronous request to work on page reload/close
        var request = new XMLHttpRequest();
        request.open("POST", "../rest/users/logout/" + service.currentUser.name, service.currentUser.name, false );
        request.send();
        console.log("test" + request.responseText);
      }
    }

    $rootScope.$on("savestate", service.Logout);

    return service;




  }]);
