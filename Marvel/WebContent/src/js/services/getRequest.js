'use strict';
angular
  .module('Chat')
  .service('GetRequest',['$http','$q',function($http,$q) {

    this.get_data = function(url){
      var d = $q.defer();
      $http.get(url).then(function(data){
        d.resolve(data);
      });
      return d.promise;
    };
}]);
