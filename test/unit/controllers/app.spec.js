'use strict';

describe('Controller: panelCtrl', function () {
  beforeEach(angular.mock.module('chatApp'));
  let $ctrl;
  let controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    let $scope = {};
    $ctrl = _$controller_;
    controller = $ctrl('appCtrl', { $scope: $scope });
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  it('should initialize a roomId to be null', function () {
    expect(controller.roomId).toBeNull();
  });

  it('should set the roomId correctly', function () {
    spyOn(controller, 'onSelect').and.callThrough();
    controller.onSelect('test');
    expect(controller.roomId).toEqual('test');
  });
});