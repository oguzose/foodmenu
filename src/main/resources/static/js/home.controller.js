(function() {
    'use strict';

    angular
        .module('menuApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];

    function HomeController($http) {

        var vm = this;
        
        vm.bookings = [];
        vm.getAll = getAll;
        vm.createMeal = createMeal;
        vm.deleteMeal = deleteMeal;
        /*vm.getAffordable = getAffordable;*/

        vm.mealInfo = {
        		'id':-1,
        		'mealName' : '',
    			'categoryName': '',
    			'description' : '',
    			'image':''
        }

        init();

        function init() {
            getAll();
        }

        function getAll() {
            var url = '/eat/allmeal';
            var mealPromise = $http.get(url);
            mealPromise.then(function(response) {
                vm.food = response.data;
            });
        }
        
        function createMeal(mealInfo) {        	
        	var url = '/eat/addmeal';
            $http.post(url, mealInfo).then(function(response) {
                vm.food = response.data;
                
                vm.mealInfo = {
            		'id':-1,
            		'mealName' : '',
        			'categoryName': '',
        			'description' : '',
        			'image':''
                };
            });
        }
        
        function deleteMeal(id) {
            var url = '/eat/deletemeal/' + id;
            $http.delete(url).then(function(response) {
                vm.food = response.data;
            });
        }

        /*function getAffordable() {
            var url = '/eat/affordable/' + 100;
            var bookingsPromise = $http.get(url);
            bookingsPromise.then(function(response) {
                vm.bookings = response.data;
            });
        }*/

    }


})();