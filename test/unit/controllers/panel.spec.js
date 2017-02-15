'use strict';

describe('Controller: panelCtrl', function () {
  beforeEach(angular.mock.module('chatApp'));
  let $ctrl
  , controller
  , $q
  , User
  , Room;

  beforeEach(angular.mock.inject(function(_$controller_, _$q_, _Room_, _User_){
    let $scope = {};
    $ctrl = _$controller_;
    $q = _$q_;
    Room = _Room_;
    User = _User_;
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

  it('should call the Room.create method when add been invoked', function () {
    let deferred = $q.defer();
    deferred.resolve('sth');
    spyOn(Room, 'create').and.returnValue(deferred.promise);

    controller.add('test');

    expect(Room.create).toHaveBeenCalledWith('test');
  });

  it('should call the Room.get method when fetchRooms been invoked', function () {
    let deferred = $q.defer();
    deferred.resolve('sth');
    spyOn(Room, 'get').and.returnValue(deferred.promise);
    controller.pagination['Rooms'] = 10;
    controller.fetchRooms('test');

    expect(Room.get).toHaveBeenCalledWith('?page=10');
  });

  it('should call the User.getNotifications method when fetchConversations been invoked', function () {
    let deferred = $q.defer();
    deferred.resolve('sth');
    spyOn(User, 'getNotifications').and.returnValue(deferred.promise);

    controller.fetchConversations();

    expect(User.getNotifications).toHaveBeenCalledWith();
  });

  it('should call the User.getNotifications method when fetchConversations been invoked', function () {
    let deferred = $q.defer();
    deferred.resolve('sth');
    spyOn(User, 'getAll').and.returnValue(deferred.promise);

    controller.fetchUsers();

    expect(User.getAll).toHaveBeenCalledWith();
  });
});