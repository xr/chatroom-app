import routes from './routes';

const onConfig = [
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	'$httpProvider',
	($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
		$httpProvider.defaults.withCredentials = true;
		routes.forEach((route) => {
			$stateProvider.state(route.name, route.opts);  
		});
		$urlRouterProvider.otherwise('/');

		if (!window.TEST_ENV) {
			$locationProvider.html5Mode(true);
		}
}];

export default onConfig;