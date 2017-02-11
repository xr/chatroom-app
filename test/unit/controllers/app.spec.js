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
});