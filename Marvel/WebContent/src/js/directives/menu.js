angular.module('Chat')
  .directive('menu', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/menu.html',
      controller: function($scope, $uibModal, $location, $rootScope, Auth) {

        $scope.message = "";
        $scope.isActive = function(route) {
          return route === $location.path();
        };

        $scope.openLogin = function() {
          var modalInstance = $uibModal.open({
            templateUrl: 'loginModal.html',
            controller: 'LoginController',
            backdrop: 'static', //to prevent closing the modal while clicking outside
            keyboard: false, //to prevent closing the modal while pressing the ESC key
            link: function(scope, element, attr) {
              scope.dismiss = function() {
                element.modal('hide');
              };

            }
          });

          modalInstance.result.then(function(message) {
            $scope.successMessage = message;
          }, function() {
            console.log('Modal dismissed at: ' + new Date());
          });
        };

        $scope.logout = function() {
            $rootScope.$broadcast('logout');
        }

          angular.element(document).ready(function() {
            $scope.openLogin(); //show login window
            //  event.preventDefault();
          });

      }
    }
  });
