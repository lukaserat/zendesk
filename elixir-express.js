var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var express = require('express');
var http = require('http');
var Task = Elixir.Task;
var Log = Elixir.Log;

Elixir.extend('express', function (message) {

	gulp.on('task_start', function (e) {
		if (e.task === 'watch') {
			Log.message("           Starting Express at port 8080");
			var app = express();
			var server = http.Server(app);
			server.listen(8080);
			app.use('/', express.static('public'));
		}
	});

});