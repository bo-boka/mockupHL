var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: './pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: './pages/second.html',
    controller: 'secondController'
  })

  .when('/third', {
    templateUrl: './pages/third.html',
    controller: 'thirdController'
  })

  .when('/fourth', {
    templateUrl: './pages/fourth.html',
    controller: 'fourthController'
  })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

}]);

myApp.controller('thirdController', ['$scope', '$log', function($scope, $log) {

}]);

myApp.controller('fourthController', ['$scope', '$log', function($scope, $log) {

}]);
