var addressBookApp = angular.module('addressBookApp', []);

addressBookApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'app/views/viewAll.html', controller: 'ViewAllContactsCtrl'})
		.when('/add', {templateUrl: 'app/views/addContact.html', controller: 'AddContactCtrl'})
		.when('/edit', {templateUrl: 'app/views/editContact.html', controller: 'EditContactCtrl'})
		.when('/viewAll', {templateUrl: 'app/views/viewAll.html', controller: 'ViewAllContactsCtrl'})
		.otherwise({redirectTo:'/'});
});

addressBookApp.factory('listeContact', function() {
	var contacts = [
		{firstName:'Benoit', lastName:'Roy', email:'uneadresse@uneadresse.com', address:'Montréal', phone:'514-555-1234'},
		{firstName:'Isabel', lastName:'Perez', email:'uneautreadresse@uneautreadresse.com', address:'Lima', phone:'514-123-4567'},
		{firstName:'Marie-Pier', lastName:'Ramsay', email:'', address:'Québec', phone:'438-111-2222'},
		{firstName:'Émilie', lastName:'Haché', email:'', address:"Val-d'or", phone:'819-888-8888'},
	];
	var factory = {};
	factory.getContacts = function() {
		return contacts;
	};
	return factory;
});

addressBookApp.controller('AddContactCtrl', function($scope, listeContact) {
	$scope.liste = listeContact.getContacts();
	$scope.addContact = function() {
		$scope.liste.push({firstName:$scope.newContact.firstName, lastName:$scope.newContact.lastName, email:$scope.newContact.email, address:$scope.newContact.address, phone:$scope.newContact.phone});
		window.location = '#/viewAll';
	}
});

addressBookApp.controller('EditContactCtrl', function($scope, listeContact) {
	$scope.liste = listeContact.getContacts();
	$scope.editContact = function(item) {
		var index = $scope.liste.indexOf(item);
		$scope.liste[index] = {firstName:$scope.editContact.firstName, lastName:$scope.editContact.lastName, email:$scope.editContact.email, address:$scope.editContact.address, phone:$scope.editContact.phone};
	}
});

addressBookApp.controller('ViewAllContactsCtrl', function($scope, listeContact) {
	$scope.liste = listeContact.getContacts();
	$scope.editContact = function(item) {
		window.location = '#/edit?item=' + $scope.liste.indexOf(item);
	}
	$scope.removeContact = function(item) {
		var index = $scope.liste.indexOf(item);
		$scope.liste.splice(index, 1);
	}
});
