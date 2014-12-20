'use strict';

/**
 * @ngdoc overview
 * @name moneydarkedgescomApp
 * @description
 * # moneydarkedgescomApp
 *
 * Main module of the application.
 */
angular
    .module('moneydarkedgescomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap-slider',
     'angular-momentjs'
  ])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });