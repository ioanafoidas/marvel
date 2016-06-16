angular.module('Chat')
.directive('menu',function(){
   return{
      restrict:'E',
      templateUrl:'views/directives/menu.html',
      controller:   function($scope, $uibModal, $location){
        $scope.message = "";
        $scope.isActive = function(route) {
            return route === $location.path();
        };

        $scope.openLogin = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'loginModal.html',
      controller: 'LoginController',
      link: function(scope, element, attr) {
      scope.dismiss = function() {
      element.modal('hide');
  };

}
    });

    modalInstance.result.then(function (message) {
      $scope.message = message;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };

      }
   }
});
