angular.module('Chat')
    .directive('customFooter',function(){
        return{
            restrict:'E',
            templateUrl:'views/directives/footer.html'
        }
    });
