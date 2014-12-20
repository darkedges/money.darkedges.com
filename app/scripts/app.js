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
    'ui.bootstrap-slider',
    'angular-momentjs',
    'ui.router',
    'ui.bootstrap',
    'ui.router.tabs'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('calc', {
                url: "/",
                templateUrl: "views/main.html",
                controller: 'MainCtrl'
            }).state('calc.goal', {
                url: 'calc/goal',
                templateUrl: 'views/calc/goal.html'
            }).state('calc.time', {
                url: 'calc/time',
                templateUrl: 'views/calc/time.html'
            });
    });