const Utils = [() => {
	const service = {};

	service.handleError = function (err) {
		console.error(err);
	};

	service.scrollBottom = function (selector) {
		/*globals $:false */
		setTimeout(function () {
			$(selector).scrollTop($(selector).height());
		}, 50);
	};

	return service;
}];

export default Utils;