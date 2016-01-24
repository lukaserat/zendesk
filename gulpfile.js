var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');
require('./elixir-express');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
	mix.sass('app.scss');
});

elixir(function (mix) {
	mix.coffee([
		'app.coffee',
	]);
});

elixir(function (mix) {
	// Angularjs
	mix.copy('node_modules/angular/angular.js', 'resources/assets/js/angular.js');

	// Underscore
	mix.copy('node_modules/underscore/underscore.js', 'resources/assets/js/underscore.js');

	// Bootstrap js
	mix.copy('node_modules/bootstrap-sass/assets/javascripts/bootstrap.js', 'resources/assets/js/bootstrap.js');

	// Jquery
	mix.copy('node_modules/jquery/dist/jquery.js', 'resources/assets/js/jquery.js');

	// Bootstrap Fonts
	mix.copy('node_modules/bootstrap-sass/assets/fonts', 'public/fonts');

	// Fontawesome
	mix.copy('node_modules/font-awesome/fonts', 'public/fonts');

	// Views
	mix.copy('resources/views', 'public');

});

elixir(function (mix) {
	mix.scripts([
		'jquery.js',
		'angular.js',
		'underscore.js',
		'bootstrap.js',
	], 'public/vendor/vendor.js');
});

elixir(function (mix) {
	mix.livereload([
		'resources/views/**/*',
		'public/**/*.html',
		'public/css/**/*',
		'public/js/**/*',
		'public/fonts/**/*',
	]);
});

elixir(function (mix) {
	mix.express();
});