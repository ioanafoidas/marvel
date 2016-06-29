angular
  .module('Chat')
  .controller('LoginController', ['$scope', 'GetRequest', '$uibModalInstance', 'usersService',
    function($scope, GetRequest, $uibModalInstance, usersService) {

      $scope.user = {};

      $scope.Login = function() {
        GetRequest.get_data('../rest/users/login').then(function(response) {
          $scope.successMessage = "Congratulations, today you are " + response.data.user.name;
          //save the assigned user
          usersService.currentUser = response.data.user;

          setTimeout(function() {
            $uibModalInstance.close($scope.successMessage);
          }, 1000);

        }, function(errorObject) {
          $scope.successMessage = "Sorry, there was an error in the authentication process. Please try again";
        });
      };

      $scope.close = function(result) {
        $uibModalInstance.dismiss('cancel');
      };
    }
  ]);
