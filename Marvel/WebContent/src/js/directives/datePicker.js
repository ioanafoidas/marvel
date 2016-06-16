angular.module('Chat')
    .directive('datePicker',function(){
        return{
            restrict:'E',
            templateUrl:'views/directives/datePicker.html'
        }
    });
