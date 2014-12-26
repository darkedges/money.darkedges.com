'use strict';

angular.module('moneydarkedgescomApp')
    .directive('yearslider', function ($moment, $compile) {
        return {
            scope: {
                maxYears: '=',
                ngModel: '='
            },
            restrict: 'E',
            template: '<div ng-transclude></div>',
            replace: true,
            transclude: true,
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                element.append('<slider ng-model="$parent.sliders.term.months" value="24" tooltip="hide" min="1" step="1" max="120" value="1"></slider>');
                $compile(element.contents())(scope)

                scope.$watch("sliders.term.months", function (newValue, oldValue) {
                    var totalDuration = moment.duration(newValue, 'months');
                    ngModelCtrl.$setViewValue({
                        years: totalDuration.years(),
                        months: totalDuration.months()
                    });
                });
            },
            controller: function ($scope) {
                this.getMaxYears = function () {
                    return $scope.maxYears;
                }
            }
        }
    })

angular.module('moneydarkedgescomApp')
    .directive('years', function ($moment, $compile) {
        return {
            restrict: 'E',
            priority: 9999,
            terminal: true,
            template: '<input />',
            replace: true,
            link: function postLink(scope, element, attrs) {
                element.keydown(function (e) {
                    -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault()
                });
            },
            compile: function (element, attrs) {
                 console.log(element);
                // Taken from https://groups.google.com/forum/#!searchin/angular/ng-model/angular/mkhW57FC0xE/Cn-y_WFvJhUJ
                element.attr('ng-model', 'ngModel.years');
                var resumeCompilation = $compile(element, null, 9999);

                return function (scope) {
                    resumeCompilation(scope);
                };
            }

        };
    });

angular.module('moneydarkedgescomApp')
    .directive('months', function ($moment, $compile) {
        return {
            restrict: 'E',
            priority: 9999,
            terminal: true,
            template: '<input />',
            replace: true,
            link: function postLink(scope, element, attrs) {
                element.keydown(function (e) {
                    -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault()
                });
            },
            compile: function (element, attrs) {
                 console.log(element);
                // Taken from https://groups.google.com/forum/#!searchin/angular/ng-model/angular/mkhW57FC0xE/Cn-y_WFvJhUJ
                element.attr('ng-model', 'ngModel.months');
                var resumeCompilation = $compile(element, null, 9999);

                return function (scope) {
                    resumeCompilation(scope);
                };
            }

        };
    });