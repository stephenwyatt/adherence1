app.controller('PatientCtrl', function($scope, $location, patientService, $routeParams, surveyService, userService) {
  $scope.patient = patientService.getPatient($routeParams.id);
  $scope.surveys = surveyService.all($routeParams.id);
  $scope.newSurvey = function() {
    $location.path('/patients/' + $scope.patient.id + '/surveys/new');
  }

})