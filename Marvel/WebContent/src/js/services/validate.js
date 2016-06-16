angular
  .module('Chat')
  .service('Validate',function() {
     return{

       check_min_length:function(form){
          if(form.$error.minlength){
             return true;
          }
       },
       check_max_length:function(form){
          if(form.$error.maxlength){
             return true;
          }
       },
       required:function(form){
          if(form.$error.required && form.$dirty && !form.$error.minlength && !form.$error.maxlength){
             return true;
          }
       },
       valid:function(form){
          if(form.$invalid && form.$error.pattern){
             return true;
          }
       },
       signup:function(form) {
          if (form.$valid) {
             alert('CONGRATULATIONS! YOU\'VE SIGNED UP IN SUCCESSFULLY!');
          }else{
             alert('INCORECT CREDENTIALS! TRY AGAIN!');
          }
       }

     };
  });
