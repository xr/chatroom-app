'use strict';

describe('Service: auth', function () {
  beforeEach(angular.mock.module('chatApp'));
  let auth;

  beforeEach(angular.mock.inject(function(_auth_){
    auth = _auth_;
  }));

  it('isLogged: dummy test', function () {
    var result = auth.isLogged();
    expect(result).toBe(true);
  });
});