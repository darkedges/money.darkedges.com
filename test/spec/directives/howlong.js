'use strict';

describe('Directive: howlong', function () {

  // load the directive's module
  beforeEach(module('moneydarkedgescomApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<howlong></howlong>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the howlong directive');
  }));
});
