describe('Controller: SurveyNew', function() {
	beforeEach(module('ngApp'));

	var scope, location, $httpBackend;

beforeEach(inject(function($location, $controller, $injector, $rootScope) {
	 scope = $rootScope.$new();
	 location = $location;
	 Survey = $injector.get('Survey');
	 spyOn(Survey, 'save').andCallFake(function(survey,cb){
	 	cb({id: 1, name: 'Johnny Patient' });
	 });
	 ctrl = $Controller('SurveyNewCtrl', {$scope: scope, $location:location, Survey: Survey });
}));

it('should save a survey and change path', function(){
	expect(scope.survey).toEqual({};
		scope.survey = { name: 'Johnny Patient'};
		spyOn(location, 'path');
		scope.save();
		expect(location.path).toHaveBeenCalled();
	});
});
