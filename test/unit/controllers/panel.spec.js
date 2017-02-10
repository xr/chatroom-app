'use strict';

describe('Controller: panelCtrl', function () {
  beforeEach(angular.mock.module('chatApp'));
  let $ctrl;

  beforeEach(angular.mock.inject(function(_$controller_){
    $ctrl = _$controller_;
  }));

  it('should be defined', function () {
    let $scope = {};
    let controller = $ctrl('panelCtrl', { $scope: $scope });
    expect(controller).toBeDefined();
  });
});