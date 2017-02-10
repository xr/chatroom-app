import 'angular';
import 'angular-ui-router';
import 'moment';
import 'angular-moment';
import 'angular-marked';


import config from './core/config';
import onConfig from './core/onConfig';
import onRun from './core/onRun';

import services from './core/serviceMap';
import components from './core/componentMap';
import controllers from './core/controllerMap';

import 'moment/locale/fi';
import 'moment/locale/ru';
import 'moment/locale/sv';
import 'moment/locale/tr';

const requires = [
	'ui.router',
	'angularMoment',
	'hc.marked'
];

const ingredients = {
	service: services,
	component: components,
	controller: controllers
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
