angular
  .module('Chat')
  .controller('LoginController', ['$scope', 'Validate', 'GetRequest', '$uibModalInstance', 'usersService',
    function($scope, Validate, GetRequest, $uibModalInstance, usersService) {

      $scope.user = {};
      //$scope.user.updatedAt = new Date(); //default value for date

      $scope.Login = function() {

        GetRequest.get_data('../rest/users/login').then(function(response) {
          console.log(response);
          $scope.successMessage = "Congratulations, today you are " + response.data.user.name;

          //logic to handle name, picture and color
          usersService.currentUser = response.data.user;
          console.log(usersService.currentUser);

          setTimeout(function() {
            $uibModalInstance.close($scope.successMessage);
          }, 1000);

        }, function(errorObject) {
          //console.log(errorObject.data.data);
          $scope.successMessage = "Sorry" + "test";
        });
      };

      $scope.close = function(result) {
        $uibModalInstance.dismiss('cancel');
      };


    }
  ]);
