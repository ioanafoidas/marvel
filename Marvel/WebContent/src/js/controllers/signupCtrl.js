angular
  .module('Chat')
  .controller('SignupController', ['$scope', 'PostRequest',
    function($scope, PostRequest) {

      
      $scope.user = {};
      $scope.user.createdAt = new Date(); //default value for date

      $scope.register = function(user) {
        $scope.errorMessage = null; //hide any previous shown error message
        PostRequest.post_data('../user/register', user).then(function(response) {
            $scope.successMessage = "User Registered successfully";
            $scope.user = {}; //reset form
            $scope.signup.$setPristine(); //reset form
          }, function(errorObject) {
            //console.log(errorObject.data.error.msg);
            $scope.errorMessage = errorObject.data.error.msg;

          });
      };
    }]);
