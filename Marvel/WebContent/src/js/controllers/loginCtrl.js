angular
  .module('Chat')
  .controller('LoginController', ['$scope', 'Validate', 'PostRequest', '$uibModalInstance', 'usersService',
    function($scope, Validate, PostRequest, $uibModalInstance, usersService) {

      $scope.user = {};
      //$scope.user.updatedAt = new Date(); //default value for date

      $scope.Login = function() {

        PostRequest.post_data('../user/login', "User Login").then(function(response) {
          console.log(response);
          $scope.successMessage = "Congratulations, today you are" + "test";

          //logic to handle name, picture and color
          // usersService.currentUser = response;

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
