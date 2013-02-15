describe('Controller: SurveyEdit', function() {
	beforeEach(module('ngApp'));

	var ctrl, scope, location

beforeEach(inject(function($location, $controller, $injector, $rootScope) {
	 scope = $rootScope.$new();
	 location = $location;
	 Survey = $injector.get('Survey');
	 spyOn(Survey, 'get').andCallFake(function(survey,cb) {
	 	cb({id: 1, name: 'Johnny Patient' });
	 });
	 ctrl = $Controller('SurveyEditCtrl', {$scope: scope, $location:location, Survey: Survey });
}));

it('should get a recent survey', function() {
	expect(scope.survey.name).toEqual('');
});

it('isClean should return true', function() {
	expect(scope.isClean()).toEqual(true);
});

it('should save a survey', function() {
	spyOn(scope.survey, 'update').andCallFake(function(cb) {
		cb({id: 1, name: 'Johnny Patient'});
	});
	spyOn(location, 'path');
	scope.save();
	expect(location.path).toHaveBeenCalled();
  });
});
