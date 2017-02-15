'use strict';

describe('Controller: panelHeaderCtrl', function () {
  beforeEach(angular.mock.module('chatApp'));
  let $ctrl
  , controller
  , $q
  , User;

  beforeEach(angular.mock.inject(function(_$controller_, _$q_, _User_){
    let $scope = {};
    $ctrl = _$controller_;
    $q = _$q_;
    User = _User_;
    controller = $ctrl('panelHeaderCtrl', { $scope: $scope });
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  it('should call User.update when invoke updateUser', function () {
    let deferred = $q.defer();
    deferred.resolve('sth');
    spyOn(User, 'update').and.returnValue(deferred.promise);

    let event = {
      target: {
        innerText: 'haha'
      }
    };

    controller.updateUser(event, '123');

    expect(User.update).toHaveBeenCalledWith('123', { name: 'haha'});
  });

});