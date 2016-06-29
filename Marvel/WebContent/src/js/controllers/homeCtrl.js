angular
  .module('Chat')
  .controller('homeCtrl', ['$scope', 'GetRequest', '$timeout', 'messageService', 'usersService', 'PostRequest', "$rootScope",
    function($scope, GetRequest, $timeout, messageService, usersService, PostRequest, $rootScope) {
      $scope.messages = [];
      $scope.users = [];
      $scope.message.body = "";

      $rootScope.$on("users refreshed", function() {
        $scope.users = usersService.allUsers;
      });

      $rootScope.$on("messages refreshed", function() {
        $scope.messages = messageService.allMessages;


      });


      $scope.send = function(message) {
        message.user = usersService.currentUser;
        message.date = Date.now();
        //for format according to backend
        var sentMessage = {};
        sentMessage.message = message;
        console.log(message);

        if (message.body != null) {
          PostRequest.post_data("../rest/messages/post", sentMessage).then(function(response) {}, function(errorObject) {
            console.log(errorObject);
          });

        }
        //to bring the scroller on the end of the conversation
        $timeout(function() {
          var scroller = document.getElementById("chat-conv1");
          if (scroller) {
            scroller.scrollTop = scroller.scrollHeight;
          }
        }, 100, false);
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

      // function getDateTime() {
      //   var now = new Date();
      //   var year = now.getFullYear();
      //   var month = now.getMonth() + 1;
      //   var day = now.getDate();
      //   var hour = now.getHours();
      //   var minute = now.getMinutes();
      //   var second = now.getSeconds();
      //   if (month.toString().length == 1) {
      //     var month = '0' + month;
      //   }
      //   if (day.toString().length == 1) {
      //     var day = '0' + day;
      //   }
      //   if (hour.toString().length == 1) {
      //     var hour = '0' + hour;
      //   }
      //   if (minute.toString().length == 1) {
      //     var minute = '0' + minute;
      //   }
      //   if (second.toString().length == 1) {
      //     var second = '0' + second;
      //   }
      //   var dateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
      //   return dateTime;
      // }

    }
  ]);
