module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['browserify', 'jasmine'],
		files: [
			'test/env.js',
			'app/app.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'test/mock/stateMock.js',
			'test/unit/**/*.spec.js'
		],
		preprocessors: {
			'app/**/*.js': ['browserify'],
			'test/**/*.js': ['browserify']
		},
		browserify: {
			debug: true,
			transform: [
				'babelify'
			]
		},
		urlRoot: '/__karma__/',
		singleRun: true,
		colors: true
	});
};