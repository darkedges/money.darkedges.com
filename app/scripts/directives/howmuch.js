'use strict';

/**
 * @ngdoc directive
 * @name moneydarkedgescomApp.directive:howmuch
 * @description
 * # howmuch
 */
angular.module('moneydarkedgescomApp')
    .directive('howmuch', function ($moment) {
        return {
            scope: {
                spm: '=',
                term: '=',
                ir: '='
            },
            template: '<span>{{totalAmount}}</span>',
            restrict: 'AEC',
            replace: true,
            link: function postLink(scope, element, attrs) {
                scope.$watchGroup(['spm', 'term', 'ir'], function () {
                    var current = 0,
                        nper = scope.term,
                        pmt = -1 * scope.spm,
                        pv = -1 *current,
                        rate = scope.ir / 1200,
                        type = 0;
                    scope.totalAmount =  Math.ceil(-(pv * Math.pow(1 + rate, nper) + pmt * ((1 + rate * type) * (Math.pow(1 + rate, nper) - 1) / rate)))
                });
            }
        };
    });