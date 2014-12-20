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
    'ui.router'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('default', {
                url: "/",
                templateUrl: "views/main.html",
                controller: 'MainCtrl'
            });
    });