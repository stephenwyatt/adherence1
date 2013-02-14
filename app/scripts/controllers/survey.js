app.controller('SurveyCtrl', function($scope, $location, $routeParams, surveyService) {
  $scope.survey = surveyService.getSurvey($routeParams.id);
  $scope.questions= [
  				   {"name":"Do you sometimes forget to take your health concern pills?"},
  				   {"name":"People sometimes miss taking their medications for reasons other than forgetting. Thinking over the past two weeks, were there any days when you did not take your health concern medicine?"},
  				   {"name":"Have you ever cut back or stopped taking your medication without telling your doctor, because you felt worse when you took it?"},
  				   {"name":"When you travel or leave home, do you sometimes forget to bring along your health concern medication?"},
  				   {"name":"Did you take your health concern medicine yesterday?"},
  				   {"name":"When you feel like your [health concern] is under control, do you sometimes stop taking your medicine?"},
  				   {"name":"Taking medication everyday is a real inconvenience for some people. Do you ever feel hassled about sticking to your health concern treatment plan?"}
 					]

  $scope.calcScore = function(){
     var score = 0;
     $(".calc:checked").each(function(){
         score+=parseInt($(this).val(),10);
     });
     $("input[name=sum]").val(score)
     console.log(score);
   };
 

  $scope.edit = function() {
    $location.path('/surveys/' + $routeParams.id + '/edit');
  }

  $scope.delete = function() {
    console.log('Do Delete Functionality');
  }

})





