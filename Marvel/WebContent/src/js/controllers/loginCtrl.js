angular
  .module('Chat')
  .controller('LoginController', ['$scope', 'DatePicker', 'Validate', 'PostRequest', '$log', '$cookies', '$uibModalInstance',
    function($scope, DatePicker, Validate, PostRequest, $log, $cookies, $uibModalInstance) {

      $scope.user = {};
      //$scope.user.updatedAt = new Date(); //default value for date

      $scope.Login = function(user) {

        $scope.errorMessage = null; //hide any previous shown error message
        PostRequest.post_data('../user/login', user).then(function(response) {
          console.log(response);
          $scope.successMessage = "User logged in successfully";
          var x = $cookies.getAll();

          setTimeout(function() {
            $uibModalInstance.close($scope.successMessage);
          }, 1000);


          $scope.user = {}; //reset form
          $scope.login.$setPristine(); //reset form
        }, function(errorObject) {
          //console.log(errorObject.data.data);
          $scope.errorMessage = errorObject.data.data;

        });
      };


      $scope.close = function(result) {
        $uibModalInstance.dismiss('cancel');
      };


    }
  ]);
