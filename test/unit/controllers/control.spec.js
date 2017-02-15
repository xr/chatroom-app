'use strict';

describe('Controller: controlCtrl', function () {
  beforeEach(angular.mock.module('chatApp'));
  let $ctrl;
  let controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    let $scope = {};
    $ctrl = _$controller_;
    controller = $ctrl('controlCtrl', { $scope: $scope });
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  it('should return true if the user is a member', function () {
    controller.room = {
      users: [
        {
          _id: '123'
        },
        {
          _id: '456'
        }
      ]
    };

    let result = controller.isMember('123');

    expect(result).toBeTruthy();
  });

  it('should return false if the user is not a member', function () {
    controller.room = {
      users: [
        {
          _id: '123'
        },
        {
          _id: '456'
        }
      ]
    };

    let result = controller.isMember('555');

    expect(result).toBeFalsy();
  });
});