describe('Controller: SessionsNew', function() {
  beforeEach(module('ngApp'));

  var ctrl, scope, location;

  beforeEach(inject(function($location, $controller, $injector, $rootScope) {
    scope = $rootScope.$new();
    location = $location;
    ctrl = $controller('SessionsNewCtrl', { $scope: scope, $location: location, User: User});
  }));


  it('has requested a user login and change path', function() {
    expect(scope.user).toEqual({});
    scope.user = { username: '', password: ''};
    spyOn(location, 'path');
    scope.save();
    expect(location.path).toHaveBeenCalled();
  });

});

