angular
    .module('Chat')
    .config([
        '$urlRouterProvider',
        '$stateProvider',

        function($urlRouterProvider,$stateProvider){
            $stateProvider
                .state('home',{
                    url: '/',
                    templateUrl:'views/home.html',
                    controller: 'homeCtrl'
                })                
                .state('signup',{
                    url:'/signup',
                    templateUrl:'views/signup.html',
                    controller:'SignupController'
                })
                .state('admin',{
                    url:'/admin',
                    templateUrl:'views/admin.html',
                    controller:'AdminCtrl'
                });
            $urlRouterProvider.otherwise("/");
        }
    ]);
