'use strict';
angular
  .module('Chat')
  .service('PostRequest',['$http','$q', '$cookies',function($http,$q, $cookies) {

    this.post_data = function(url, data){
      var d = $q.defer();
      $http.post(url, data).then(function(response){
              d.resolve(response);
      }, function(error){
          d.reject(error);
      });
      return d.promise;
    };


}]);
