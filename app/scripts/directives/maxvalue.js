'use strict';

angular.module("moneydarkedgescomApp").factory("isnan", [

        function () {
        return function (val) {
            return val = parseInt(val), isNaN(val) ? 0 : val
        }
        }
]);

angular.module('moneydarkedgescomApp')
    .directive('yearslider',
        function ($moment, $compile, isnan) {
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
                    var totalDuration = moment.duration(24, 'months');
                    ngModelCtrl.$setViewValue({
                        years: totalDuration.years(),
                        months: totalDuration.months()
                    });
                    element.append('<slider ng-model="$parent.sliders.term.months" value="24" tooltip="hide" min="1" step="1" max="120" value="1"></slider>');
                    $compile(element.contents())(scope)

                    scope.$watch('ngModel.years', function (newValue, oldValue) {
                        var ngModel = isnan(newValue),
                            maxValue = isnan(scope.maxYears),
                            years = angular.isUndefined(scope.ngModel) ? 0 : isnan(scope.ngModel.years),
                            months = angular.isUndefined(scope.ngModel) ? 0 : isnan(scope.ngModel.months);
                        if (ngModel >= maxValue) {
                            scope.ngModel.years = maxValue;
                            scope.ngModel.months = 0;
                        }
                        console.log(scope);
                       // scope.sliders.term.months = (years * 12) + (months);
                       // console.log(scope['sliders.term.months']);
                    });

                    scope.$watch('ngModel.months', function (newValue, oldValue) {
                        var ngModel = isnan(newValue),
                            maxYears = isnan(scope.maxYears),
                            years = angular.isUndefined(scope.ngModel) ? 0 : isnan(scope.ngModel.years),
                            months = angular.isUndefined(scope.ngModel) ? 0 : isnan(scope.ngModel.months);
                        if (ngModel > 11) {
                            if (years == maxYears) {
                                scope.ngModel.months = 0;
                            } else {
                                scope.ngModel.months = 11;
                            }
                        }
                        //scope.sliders.term.months = (years * 12) + (months);
                    });

                    scope.$watch("sliders.term.months", function (newValue, oldValue) {
                        var totalDuration = moment.duration(newValue, 'months');
                        ngModelCtrl.$setViewValue({
                            years: totalDuration.years(),
                            months: totalDuration.months()
                        });
                    });
                }
            }
        });

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
                // Taken from https://groups.google.com/forum/#!searchin/angular/ng-model/angular/mkhW57FC0xE/Cn-y_WFvJhUJ
                element.attr('ng-model', 'ngModel.months');
                var resumeCompilation = $compile(element, null, 9999);

                return function (scope) {
                    resumeCompilation(scope);
                };
            }

        };
    });