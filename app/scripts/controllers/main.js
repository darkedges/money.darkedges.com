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
                heading: 'Saving Goal',
                route: 'calc.goal'
            },
            {
                heading: 'Time',
                route: 'calc.time'
            }
    ];
    });