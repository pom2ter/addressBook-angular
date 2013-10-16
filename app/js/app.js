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
		{firstName:'Benoit', lastName:'Roy', city:'Montréal'},
		{firstName:'Isabel', lastName:'Perez', city:'Lima'},
		{firstName:'Marie-Pier', lastName:'Ramsay', city:'Québec'},
		{firstName:'Émilie', lastName:'Haché', city:"Val-d'or"}
	];
	var factory = {};
	factory.getContacts = function() {
		return contacts;
	};
	return factory;
});

addressBookApp.controller('AddContactCtrl', function($scope, listeContact) {
	$scope.addContact = function() {
		$scope.liste.push({firstName:$scope.newContact.firstName, lastName:$scope.newContact.lastName, city:$scope.newContact.city});
	}
});

addressBookApp.controller('EditContactCtrl', function($scope, listeContact) {
	$scope.editContact = function() {
		$scope.liste.push({firstName:$scope.newContact.firstName, lastName:$scope.newContact.lastName, city:$scope.newContact.city});
	}
});

addressBookApp.controller('ViewAllContactsCtrl', function($scope, listeContact) {
	$scope.liste = listeContact.getContacts();
	$scope.removeContact = function(item) {
		var index = $scope.liste.indexOf(item)
		$scope.liste.splice(index, 1);
	}
});
