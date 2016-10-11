var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', function($scope){
  $scope.income = [];
  $scope.expense = [];
  $scope.output = 0;
  $scope.output = 0;
  $scope.arr = [];

  $scope.addtodolist = function (){ 
  $scope.arr.push ({

    "task": $scope.userInput,
    "priority": $scope.priorityColor  
  });

  } 

  }
]);

  
        


   
  
