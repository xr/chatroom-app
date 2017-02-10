import routes from './routes';

const onConfig = [
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	($stateProvider, $urlRouterProvider, $locationProvider) => {
		routes.forEach((route) => {
			$stateProvider.state(route.name, route.opts);  
		});
		$urlRouterProvider.otherwise('/');

		if (!window.TEST_ENV) {
			$locationProvider.html5Mode(true);
		}
}];

export default onConfig;