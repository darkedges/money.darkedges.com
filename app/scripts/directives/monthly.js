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
            template: '<span>{{totalTime}}</span>',
            restrict: 'AEC',
            replace: true,
            link: function postLink(scope, element, attrs) {
                scope.$watchGroup(['goal', 'term', 'ir'], function () {
                    var current = 0,
                        rate = scope.ir / 1200,
                        pmt = scope.spm,
                        pv = current,
                        fv = -1 * scope.goal,
                        type = 0,
                        totalMonths = Math.ceil(Math.log((-fv * rate + pmt * (1 + rate * type)) / (pv * rate + pmt * (1 + rate * type))) / Math.log(1 + rate));
                    var months = $moment(),
                        tMonths =  $moment(months).add(totalMonths,'months');
                    scope.totalTime = moment.preciseDiff(months, tMonths);;
                });
            }
        };
    });