var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: '/pages/main.html',
    controller: 'mainController'
  })

  .when('/service', {
    templateUrl: '/pages/service.html',
    controller: 'secondController'
  })

  .when('/portfolio', {
    templateUrl: '/pages/portfolio.html',
    controller: 'thirdController'
  })

  .when('/team', {
    templateUrl: '/pages/team.html',
    controller: 'fourthController'
  })

  .when('/blog', {
    templateUrl: '/pages/blog.html',
    controller: 'fifthController'
  })


});

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {

  $log.info($location.path());

  $scope.name = 'Main';

}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

  $scope.name = 'Service';

}]);

myApp.controller('thirdController', ['$scope', '$log', function($scope, $log) {

  $scope.name = 'Portfolio';

}]);

myApp.controller('fourthController', ['$scope', '$log', function($scope, $log) {

  $scope.name = 'Team';

}]);

myApp.controller('fifthController', ['$scope', '$log', function($scope, $log) {

  $scope.name = 'Blog';

}]);
