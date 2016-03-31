var app = angular.module('minmax', []);

// https://minmax-server.herokuapp.com/register/'

app.controller('MinMaxCtrl', function($scope, $http){
   $scope.formModel = {}; 
   $scope.onSubmit = function() {
       alert("success");
   
   
   $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
   success(function(data){
       console.log(":)")
   }).error(function(data){
       console.log(":(")
   });
  
   }
});