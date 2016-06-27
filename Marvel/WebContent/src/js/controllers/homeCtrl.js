angular
  .module('Chat')
  .controller('homeCtrl', ['$scope', 'GetRequest', '$timeout', 'messageService', 'usersService', 'PostRequest', "$rootScope",
    function($scope, GetRequest, $timeout, messageService, usersService, PostRequest, $rootScope) {

      $rootScope.$on("users refreshed", function() {
          $scope.users = usersService.allUsers;
        });

        $rootScope.$on("messages refreshed", function() {
            $scope.messages = messageService.allMessages;
          });



      $scope.send = function(message) {
        message.user = usersService.currentUser;
        message.time = getDateTime();

        if (message.message != null) {
          console.log(message.message);
          PostRequest.post_data("../rest/messages/post", message).then(function(response) {
            console.log(response);
          }, function(errorObject) {

            $scope.successMessage = "Sorry" + "test";
          });

          //$scope.allMessages.push(message);
        }
        $timeout(function() {
          var scroller = document.getElementById("chat-conv");
          scroller.scrollTop = scroller.scrollHeight;
        }, 0, false);
        $scope.message = {};
      }


      $scope.checkCurrentUser = function(message) {
        //todo
        if (message.user.name === usersService.currentUser.name) {
          return true;
        } else {
          return false;
        }

      }

      $scope.checkStatus = function(userID) {
        //todo
        return true;
      }

      function getDateTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        if (month.toString().length == 1) {
          var month = '0' + month;
        }
        if (day.toString().length == 1) {
          var day = '0' + day;
        }
        if (hour.toString().length == 1) {
          var hour = '0' + hour;
        }
        if (minute.toString().length == 1) {
          var minute = '0' + minute;
        }
        if (second.toString().length == 1) {
          var second = '0' + second;
        }
        var dateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        return dateTime;
      }

    }
  ]);
