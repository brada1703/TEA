var app = angular.module("mainApp", ['ngRoute']);
app.config(['$routeProvider',
  function($routeProvider) {
     $routeProvider
            .when('/grammar', {
                templateUrl: 'http://www.theenglishauthority.com/dist/grammar.htm',
                controller: 'mainController'
            })
            .when('/second', {
                templateUrl: 'http://www.theenglishauthority.com/dist/second.htm',
                controller: 'secondController'
            })
            .otherwise({
                redirectTo: '/second'
            });
}]);

app.controller('mainController',
    function($scope) {
});

app.controller('secondController',
    function($scope) {
});
