var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', function($scope){
  $scope.arr = [];

  $scope.addtodolist = function (){ 
  $scope.arr.push ({

    "task": $scope.userInput,
    "priority": $scope.priorityColor  
  });

  } 

  }
]);

  
        


   
  