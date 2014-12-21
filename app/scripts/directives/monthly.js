'use strict';

/**
 * @ngdoc directive
 * @name moneydarkedgescomApp.directive:monthly
 * @description
 * # monthly
 */
angular.module('moneydarkedgescomApp')
    .directive('monthly', function ($moment) {
        return {
            scope: {
                goal: '=',
                term: '=',
                ir: '='
            },
            template: '<span>{{totalPerMonth}}</span>',
            restrict: 'AEC',
            replace: true,
            link: function postLink(scope, element, attrs) {
                scope.$watchGroup(['goal', 'term', 'ir'], function () {
                    var current = 0,
                        nper = scope.term,
                        pv = -1 * current,
                        fv = -1 * scope.goal,
                        rate = scope.ir / 1200,
                        type = 0;
                    scope.totalPerMonth = Math.floor(-((fv + pv * Math.pow(1 + rate, scope.term)) / ((1 + rate * type) * ((Math.pow(1 + rate, scope.term) - 1) / rate))));
                });
            }
        };
    });