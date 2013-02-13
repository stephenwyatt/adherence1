app.controller('SessionsNewCtrl', function($scope, userService, $location) {
  $scope.login = function(user) {
    // call some authenticate
    userService.user = user;
    $location.path('/');
  }
})