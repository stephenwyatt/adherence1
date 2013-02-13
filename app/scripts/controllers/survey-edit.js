app.controller('SurveyEditCtrl', function($scope, $location, surveyService, $routeParams) {
  $scope.survey = surveyService.getSurvey($routeParams.id)
  $scope.update = function(survey) {
    // save survey to server
    surveyService.update($routeParams.id, survey);
    $location.path('/surveys/' + survey.id);
  }
})