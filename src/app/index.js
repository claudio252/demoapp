'use strict';

angular.module('demoapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
      	url: '/about',
      	templateUrl: 'app/components/about/about.html',
        controller: 'AboutCtrl'
      })
      .state('contact', {
      	url: '/contact',
      	templateUrl: 'app/components/contact/contact.html',
        controller: 'ContactCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
