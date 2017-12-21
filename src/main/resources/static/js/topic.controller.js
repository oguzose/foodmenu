(function() {
    'use strict';

    angular
        .module('menuApp')
        .controller('TopicController', TopicController);

    TopicController.$inject = ['$http'];

    function TopicController ($http) {
        var vm = this;
        vm.name = 'burada kullanıcılar olacak'

       console.log('greeting from topic.controller');
       
    }
})();