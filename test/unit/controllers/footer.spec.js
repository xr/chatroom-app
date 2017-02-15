'use strict';

describe('Controller: footerCtrl', function () {
  beforeEach(angular.mock.module('chatApp'));
  let $ctrl
  , controller
  , $scope;

  beforeEach(angular.mock.inject(function(_$controller_){
    $ctrl = _$controller_;
    $scope = {};
    controller = $ctrl('footerCtrl', { $scope: $scope });
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  it('should initialize content to be null', function () {
    expect(controller.content).toBeNull();
  });

  it('should call the addMessage method in the ctro', function () {
    controller.content = 'hello';
    controller.addMessage = jasmine.createSpy();
    $scope.submit();
    expect(controller.addMessage).toHaveBeenCalledWith({ message: 'hello'});
    expect(controller.content).toBeNull();
  });
});