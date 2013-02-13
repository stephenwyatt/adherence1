app.controller('SurveyCtrl', function($scope, $location, $routeParams, surveyService) {
  $scope.survey = surveyService.getSurvey($routeParams.id);

  $scope.edit = function() {
    $location.path('/surveys/' + $routeParams.id + '/edit');
  }
  $scope.delete = function() {
    console.log('Do Delete Functionality');
  }
})