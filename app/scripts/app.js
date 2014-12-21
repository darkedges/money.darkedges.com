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
    'ui.router',
    'ui.bootstrap',
    'ui.router.tabs',
    'ui.bootstrap-slider',
    'angular-momentjs'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('calc', {
                url: "/",
                templateUrl: "views/main.html",
                controller: 'MainCtrl'
            }).state('calc.howlong', {
                url: 'calc/howlong',
                templateUrl: 'views/calc/howlong.html'
            }).state('calc.howmuch', {
                url: 'calc/howmuch',
                templateUrl: 'views/calc/howmuch.html'
            }).state('calc.monthly', {
                url: 'calc/monthly',
                templateUrl: 'views/calc/monthly.html'
            });
    });