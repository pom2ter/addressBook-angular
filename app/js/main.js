require.config({
	baseUrl: '/angular/app/js/',
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.10.2.min',
		'less': './libs/less-1.4.1.min',
		'bootstrap': './libs/bootstrap.min',
		'angular': './libs/angular.min'
	},
	shim: {
		'angular': {
			exports: 'angular'
		}
	}
});

define(['less', 'jquery'], function() {});
define(['bootstrap', 'jquery'], function() {});
// define(['angular'], function() {});
