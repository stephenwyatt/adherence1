
describe('Controller: SurveyCtrl', function() {
	beforeEach(module('ngApp'));

	var ctrl, scope, location;

	beforeEach(inject(function($controller, $ injector, $rootScope) {

	 scope= $rootScope.$new();
	 location = $loction;
	 Survey = $injector.get('Survey');
	 spyOn(Survey, 'get').andCallfake(function(id,cb){
	 	cb({id:1, name: 'Johnny Patient'});
	 });
	 ctrl = $Controller('SurveyCtrl', {$scope: scope, $location: location, Survey: Survey });
}));

it('should allow the user the ability to click radio buttons for every question', function() {
	expect(scope.calc).toEqual[{value:0, answer:"Yes"},{value:1, answer:"No"}];

it('should allow survey to save to patientId', function() {
	spyOn(scope.survey, 'update').andCallfake(function(cb) {
		cb({id: 1, name: 'Johnny Patient'});
	});

	spyOn(location, 'path');
	scope.save();
	expect(location.path).toHavebeenCalled();
  });
});


