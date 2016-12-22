var grammarApp = angular.module("grammarApp", ['ngRoute']);
grammarApp.config(['$routeProvider',
  function($routeProvider) {
     $routeProvider
            .when('/verbs', {
                templateUrl: 'http://www.theenglishauthority.com/grammar/verbs.htm',
                controller: 'verbsController'
            })
            .when('/nouns', {
                templateUrl: 'http://www.theenglishauthority.com/grammar/nouns.htm',
                controller: 'nounsController'
            })
            .when('/phrasalverbs', {
                templateUrl: 'http://www.theenglishauthority.com/grammar/phrasalverbs.htm',
                controller: 'phrasalverbsController'
            })
            .when('/prepositions', {
                templateUrl: 'http://www.theenglishauthority.com/grammar/prepositions.htm',
                controller: 'prepositionsController'
            })
            .otherwise({
                redirectTo: '/verbs'
            });
}]);
grammarApp.controller('verbsController',
    function($scope) {
});
grammarApp.controller('nounsController',
    function($scope) {
});
grammarApp.controller('phrasalverbsController',
    function($scope) {
});
grammarApp.controller('prepositionsController',
    function($scope) {
});
