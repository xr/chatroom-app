import routes from './routes';

const onConfig = [
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	'$httpProvider',
	'markedProvider',
	($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, markedProvider) => {
		$httpProvider.defaults.withCredentials = true;

		routes.forEach((route) => {
			$stateProvider.state(route.name, route.opts);  
		});
		$urlRouterProvider.otherwise('/');

		if (!window.TEST_ENV) {
			$locationProvider.html5Mode(true);
		}

		markedProvider.setOptions({gfm: true, tables: true});
		markedProvider.setRenderer({
			link: function(href, title, text) {
				return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank'>" + text + "</a>";
			}
		});
}];

export default onConfig;