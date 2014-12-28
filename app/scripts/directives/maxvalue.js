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
                    var totalDuration = moment.duration(isnan(attrs.value), 'months');
                    ngModelCtrl.$setViewValue({
                        years: totalDuration.years(),
                        months: totalDuration.months(),
                        slider: isnan(attrs.value)
                    });
                    var slider = angular.element('<slider ng-model="$parent.ngModel.slider" />');
                    if (attrs.value) slider.attr('value', attrs.value);
                    if (attrs.maxvalue) slider.attr('max', attrs.maxvalue);
                    if (attrs.minvalue) slider.attr('min', attrs.minvalue);
                    if (attrs.stooltip) slider.attr('tooltip', attrs.stooltip);
                    element.append(slider);
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
                        scope.ngModel.slider = (years * 12) + (months);
                    });

                    scope.$watch('ngModel.months', function (newValue, oldValue) {
                        var ngModel = isnan(newValue),
                            maxYears = isnan(scope.maxYears),
                            years = angular.isUndefined(scope.ngModel) ? 0 : isnan(scope.ngModel.years),
                            months = angular.isUndefined(scope.ngModel) ? 0 : isnan(scope.ngModel.months);
                        if (years == maxYears) {
                            months = 0;
                        } else if (ngModel > 11) {
                            months = 11;
                        }
                        scope.ngModel.months = months;
                        scope.ngModel.slider = (years * 12) + months;
                    });

                    scope.$watch("ngModel.slider", function (newValue, oldValue) {
                        var totalDuration = moment.duration(newValue, 'months');
                        ngModelCtrl.$setViewValue({
                            years: totalDuration.years(),
                            months: totalDuration.months(),
                            slider: newValue
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