app.controller('SurveyNewCtrl', function($scope, $location, surveyService, util, patientService, $routeParams) {
  $scope.patient = patientService.getPatient($routeParams.id);
  $scope.create = function(survey) {
    survey.id = util.uniqueId();
    survey.patient = $scope.patient;
    surveyService.add(survey);
    // need to save survey first
    $location.path('/patients/' + $routeParams.id);
  }
})