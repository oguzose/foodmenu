angular.module('menuApp', [ 'ngRoute' ])
	.config(function($routeProvider, $httpProvider, $locationProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'HomeController',
		controllerAs: 'vm'
	}).when('/login', {
		templateUrl : 'login.html',
		controller : 'LoginController',
		controllerAs: 'controller'
	}).when('/topic', {
		templateUrl : 'topic.html',
		controller : 'TopicController',
		controllerAs: 'controller'			
	}).otherwise({
        redirectTo: '/'
    });

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

})
	.controller('navigation',
	
	function($rootScope, $http, $location, $route) {
		var self = this;
	
		self.tab = function(route) {
			return $route.current && route === $route.current.controller;
		};
	
	});
