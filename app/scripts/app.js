var app = angular.module('ngApp', [])
.config(function($routeProvider) {
  $routeProvider
    .when('/', { controller: 'MainCtrl', templateUrl: '/app/views/main.html'}) //patients
    .when('/patients/:id', { controller: 'PatientCtrl', templateUrl: '/app/views/patient.html'})
    .when('/patients/:id/surveys/new', { controller: 'SurveyNewCtrl', templateUrl: '/app/views/survey-new.html'})
    .when('/surveys/:id', { controller: 'SurveyCtrl', templateUrl: '/app/views/survey.html'})
    .when('/surveys/:id/edit', { controller: 'SurveyEditCtrl', templateUrl: '/app/views/survey-edit.html'})
    .when('/sessions/new', { controller: 'SessionsNewCtrl', templateUrl: '/app/views/sessions-new.html'})
    .otherwise({redirectTo: '/sessions/new'});
  })
   .factory('surveyService', function(util){
    var surveys;
    return {
      surveys: surveys,
      all: function(patientId) {
        return util(this.surveys).filter(function(survey) {
          return survey.patient.id === parseInt(patientId,10);
        });
      },
      add: function(survey) {
        if (!this.surveys) { this.surveys = []; }
        this.surveys.push(survey);
      },
      getSurvey: function(id) {
        return util.findWhere(this.surveys, {id: id});
      },
      update: function(id, data) {
        var survey = util.findWhere(this.surveys, {id: id});
        survey = data;
      } 
      
    };
  })
  .factory('userService', function() {
    var user;
    return { 
      user: user 
    };
  })
  .factory('patientService', function(util) {
    var patients = [
      { id: 1, name: 'Johnny Patient' },
      { id: 2, name: 'Susie Patient'},
      { id: 3, name: 'Harry Truman'}
    ]
    return { 
      patients: patients,
      getPatient: function(id) {
        return util.findWhere(patients, {id: parseInt(id, 10)});
      } 
    };
  })
  .factory('util', function() {
    return _;
  })
