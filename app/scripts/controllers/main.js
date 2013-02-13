app.controller('MainCtrl', function($scope, $location, userService, patientService) {
  if (!userService.user) {
    // force user to login
    $location.path('/sessions/new');
    return;
  }
  // successfully logged in
  $scope.patients = patientService.patients;
  
  
})
// app.controller('SurveyCtrl', function($scope) {
//   $scope.surveys = [
//     {"id":"1","question": "Do you sometimes forget to take your health concern pills?", "answer":"Yes","answer1":"No"},
//     {"id":"2","question": "People sometimes miss taking their medications for reasons other than forgetting. Thinking over the past two weeks, were there any days when you did not take your health concern medicine?", "answer":"Yes","answer1":"No"},
//     {"id":"3","question": "Have you ever cut back or stopped taking your medication without telling your doctor, because you felt worse when you took it?", "answer":"Yes","answer1":"No"},
//     {"id":"4","question": "When you travel or leave home, do you sometimes forget to bring along your health concern medication?", "answer":"Yes","answer1":"No"},
//     {"id":"5","question": "Did you take your health concern medicine yesterday?", "answer":"Yes","answer1":"No"},
//     {"id":"6","question": "When you feel like your [health concern] is under control, do you sometimes stop taking your medicine?", "answer":"Yes","answer1":"No"},
//     {"id":"7","question": "Taking medication everyday is a real inconvenience for some people. Do you ever feel hassled about sticking to your health concern treatment plan?", "answer":"Yes","answer1":"No"}
//     ]
// 
//   $scope.calcScore = function(){
//     var score = 0;
//     $(".calc:checked").each(function(){
//         score+=parseInt($(this).val(),10);
//     });
//     $("input[name=sum]").val(score)
//     console.log(score);
//   };
// })
// 
// app.controller('UserCtrl', function($scope) {
//   $scope.patients = [
//     {firstname:"Jack",lastname:"Jackson","id":"1"},
//     {firstname:"Richard",lastname:"Tyler","id":"2"},
//     {firstname:"Stephen",lastname:"Wyatt","id":"3"},
//   ];
//   $scope.addPatient = function() {
//     $scope.patients.push({firstname:$scope.firstname,lastname:$scope.lastname,id:$scope.id});
//     $scope.firstname = '';
//     $scope.lastname = '';
//     $scope.id='';
// 
//   }
// }
// 
// app.controller('NewCtrl', function($scope) {
//   $scope.addPatient = function() {
//     $scope.patients.push($scope.patientfirstname);
//     $scope.firstname = '';
//     $scope.lastname = '';
//     $scope.id = '';
//   }
// }
