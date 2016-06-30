angular
  .module('Chat')
  .config([
    '$urlRouterProvider',
    '$stateProvider',


    function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'homeCtrl',
          resolve: {
            security: ['$q', 'usersService', function($q, usersService) {
              console.log(usersService.currentUser);
              if (angular.equals({}, usersService.currentUser)) {
                return $q.reject("Not Authorized");
              }
            }]
          }

        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'views/signup.html',
          controller: 'SignupController'
        })
        .state('admin', {
          url: '/admin',
          templateUrl: 'views/admin.html',
          controller: 'AdminCtrl'
        });
      $urlRouterProvider.otherwise("/");
    }
  ]);
