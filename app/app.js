import 'angular';
import 'angular-ui-router';
import 'moment';
import 'angular-moment';
import 'angular-marked';
import 'angular-sanitize';
import 'angular-touch';

import config from './core/config';
import onConfig from './core/onConfig';
import onRun from './core/onRun';

import services from './core/serviceMap';
import components from './core/componentMap';
import filters from './core/filterMap';
import controllers from './core/controllerMap';
import directives from './core/directiveMap';

import 'moment/locale/en-gb';
const requires = [
	'ui.router',
	'angularMoment',
	'hc.marked',
	'ngSanitize',
	'ngTouch'
];

const ingredients = {
	service: services,
	component: components,
	filter: filters,
	controller: controllers,
	directive: directives
};

window.app = angular.module('chatApp', requires);

angular.module('chatApp').constant('config', config);

// register all the ingredients
for (let type in ingredients) {
	if (ingredients.hasOwnProperty(type)) {
		for (let name in ingredients[type]) {
			if (ingredients[type].hasOwnProperty(name)) {
				angular.module('chatApp')[type](name, ingredients[type][name]);
			}
		}
	}
}

// register external libs
angular.module('chatApp').config(onConfig);

angular.module('chatApp').run(onRun);

angular.bootstrap(document, ['chatApp'], {
	strictDi: true
});
