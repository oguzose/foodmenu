(function() {
    'use strict';

    angular
        .module('menuApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http'];

    function LoginController ($http) {
        var vm = this;
        vm.name = 'burada kullanıcılar olacak'

       console.log('greeting from topic.controller');
       
    }
})();