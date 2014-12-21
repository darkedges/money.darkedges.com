'use strict';

/**
 * @ngdoc function
 * @name moneydarkedgescomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moneydarkedgescomApp
 */
angular.module('moneydarkedgescomApp')
    .controller('MainCtrl', function ($scope) {
        $scope.tabData = [
            {
                heading: 'How much can i save?',
                route: 'calc.howmuch'
            },
            {
                heading: 'How long will it take?',
                route: 'calc.howlong'
            },
                        {
                heading: 'Monthly contributions',
                route: 'calc.monthly'
            },
    ];
    });