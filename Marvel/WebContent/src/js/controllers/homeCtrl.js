angular
  .module('Chat')
  .controller('homeCtrl', ['$scope', 'GetRequest', '$timeout', 'messageService', 'usersService', 'PostRequest', "$rootScope",
    function($scope, GetRequest, $timeout, messageService, usersService, PostRequest, $rootScope) {
      $scope.messages = [];
      $scope.users = [];
      $scope.message.body = "";
      $scope.isScrollDown = false;
      var audio = new Audio("../public/assets/audio/bell.mp3");


      $rootScope.$on("users refreshed", function() {
        $scope.users = usersService.allUsers;
      });


      $rootScope.$on("messages refreshed", function() {
        var scroller = document.getElementById('chat-conv1');
        if (scroller) {
          //scroll to bottom of div if the scroller is currently at the bottom and there are new messages
          if (scroller.scrollHeight - scroller.scrollTop === scroller.clientHeight && $rootScope.isNewMessage == true) {
            $scope.messages = messageService.allMessages;
            $timeout(function() { //timeout needed because the messages variable does not load in time
              scroller.scrollTop = scroller.scrollHeight;
            }, 200, false);
          } else {
            $scope.messages = messageService.allMessages;
          }
          //todo: check if tab is active
          if (($rootScope.isNewMessage == true && scroller.scrollHeight - scroller.scrollTop != scroller.clientHeight && $rootScope.isCurrentUser== false) || ($rootScope.isNewMessage == true && $rootScope.isTabActive == false)) {
            audio.play();
          }
        }
      });

      $scope.send = function(message) {
        message.user = usersService.currentUser;
        message.date = Date.now();
        //for format according to backend
        var sentMessage = {};
        sentMessage.message = message;


        if (message.body != null) {
          PostRequest.post_data("../rest/messages/post", sentMessage).then(function(response) {
          }, function(errorObject) {
            console.log(errorObject);
          });
        }
        //reset form once the message is sent
        $scope.message = {};
      }

      //check if the owner of the message is the current user or not. For ng-class in the html
      $scope.checkCurrentUser = function(message) {
        if (message.user.name === usersService.currentUser.name) {
          return true;
        } else {
          return false;
        }

      }


    }
  ]);
