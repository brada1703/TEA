var app = angular.module("mainApp", ['ngRoute']);
app.config(['$routeProvider',
  function($routeProvider) {
     $routeProvider
            .when('/first', {
                templateUrl: 'http://www.theenglishauthority.com/dist/first.htm',
                controller: 'mainController'
            })
            .when('/second', {
                templateUrl: 'http://www.theenglishauthority.com/dist/second.htm',
                controller: 'secondController'
            })
            .otherwise({
                redirectTo: '/first'
            });
}]);

app.controller('mainController',
    function($scope) {
});

app.controller('secondController',
    function($scope) {
});
