'use strict';

describe('Controller: panelCtrl', function () {
  beforeEach(angular.mock.module('chatApp'));
  let $ctrl;
  let controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    let $scope = {};
    $ctrl = _$controller_;
    controller = $ctrl('panelCtrl', { $scope: $scope });
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  it('should contain the right properties', function () {
    spyOn(controller, 'fetchRooms');
  
    expect(controller.tab).toBe('Rooms');
    expect(controller.collections.length).toBe(0);
    controller.$onInit();
    expect(controller.fetchRooms).toHaveBeenCalled();
    expect(controller.pagination).toBeDefined();
  });

  it('should change the tab and call fetch method', function () {
    spyOn(controller, 'fetchConversations');

    controller.change('Conversations');
    expect(controller.tab).toBe('Conversations');
    expect(controller.loading).toBe(true);
    expect(controller.collections.length).toBe(0);
    expect(controller.fetchConversations).toHaveBeenCalled();
  });
});