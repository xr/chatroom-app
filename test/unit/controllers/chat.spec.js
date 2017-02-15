'use strict';

describe('Controller: chatCtrl', function () {
  beforeEach(angular.mock.module('chatApp'));
  let $ctrl
    , controller
    , Message
    , $q
    , Room;

  beforeEach(angular.mock.inject(function(_$controller_, _Message_, _Room_, _$q_){
    let $scope = {};
    $ctrl = _$controller_;
    Message = _Message_;
    $q = _$q_;
    Room = _Room_;
    controller = $ctrl('chatCtrl', { $scope: $scope });
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  it('should initialize the correct variables', function () {
    expect(controller.messages[0].from.name).toEqual('Robot.C');
    expect(controller.page).toEqual(1);
    expect(controller.noMsgs).toBeFalsy();
    expect(controller.room.title).toEqual('Welcome');
  });

  it('should call the Room.update method when updateRoom been invoked', function () {
    let deferred = $q.defer();
    let mockRoom = {
      _id: '123',
      title: 'hello test',
      desc: 'test desc',
      logo: 'test logo'
    };
    deferred.resolve({
      data: {
        data: mockRoom
      }
    });
    spyOn(Room, 'update').and.returnValue(deferred.promise);

    controller.updateRoom(mockRoom);

    expect(Room.update).toHaveBeenCalledWith('123', {
      title: 'hello test',
      desc: 'test desc',
      logo: 'test logo'
    });
  });

  it('should call the Room.getOne and fetchMessages method when fetchRoom been invoked', function () {
    let deferred = $q.defer();
    let mockRoom = {
      _id: '123',
      title: 'hello test',
      desc: 'test desc',
      logo: 'test logo'
    };
    deferred.resolve({
      data: {
        data: mockRoom
      }
    });
    spyOn(Room, 'getOne').and.returnValue(deferred.promise);

    controller.fetchRoom('123');

    expect(Room.getOne).toHaveBeenCalledWith('123');
  });

  it('should call the Message.get with the correct query', function () {
    let deferred = $q.defer();
    controller.page = 10;
    deferred.resolve('someThing');
    spyOn(Message, 'get').and.returnValue(deferred.promise);

    controller.fetchMessages('123');

    expect(Message.get).toHaveBeenCalledWith('?page=10&rid=123');
  });

  it('should call the Message.add with the correct data', function () {
    let deferred = $q.defer();
    controller.room._id = '123';
    deferred.resolve('someThing');
    spyOn(Message, 'add').and.returnValue(deferred.promise);

    controller.addMessage('hello');

    expect(Message.add).toHaveBeenCalledWith({rid: '123', content: 'hello'});
  });

  it('should call the Message.update with the correct id', function () {
    let deferred = $q.defer();
    controller.room._id = '123';
    deferred.resolve('someThing');
    spyOn(Room, 'update').and.returnValue(deferred.promise);

    controller.join('456');

    expect(Room.update).toHaveBeenCalledWith('123', { uid: '456'});
  });


});