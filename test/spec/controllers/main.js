describe('MainCtrl', function () {
		var $scope, $location, userService, patientService;

		beforeEach(inject(function($controller){
			scope = $rootScope.$new();
			ctrl = $controller("MainCtrl", ($scope:patients});
		}));

it('should validate the user upon', function () {
			expect(scope.patients).toBeValid('');
		});

it ('should link a valid user to patients page', function() {
			expect(scope.patients).link('patients');
	});
});

