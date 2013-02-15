
describe('Controller: PatientCtrl', function () {
	beforeEach(module('ngApp'));

	var ctrl, scope, locaton, $httpBackend;
		

		beforeEach(inject(function( $location, $controller, $injector, $rootScope);
			scope = $rootScope.$new();
			location =$location.path('/patients/' + $scope.patient.id + '/surveys/new');
			Patient = $injector.get('Patient';)
			spyOn(Patient, 'save').andCallFake(function(patient,cb){
				cb({id:1, name: 'Johnny Patient'});
			});
			ctrl = $controller("PatientCtrl", ($scope:scope, $location: location, Patient: Patient});

	}));

		it('should fetch patients model with 3 users from patientService', function() {
			expect(scope.patients).toEqual({};)
			scope.patients = [{name: "Harry Truman"},{name: "Johnny Patient"}, {name: "Susie Patient"}];
			spyOn(location, 'path');
			scope.save();
			expect(location.path).toHaveBeenCalled();
		});
	});




