const Utils = [() => {
	const service = {};

	service.handleError = function (err) {
		console.error(err);
	};

	service.scrollBottom = function (selector) {
		/*globals $:false */
		setTimeout(function () {
			$(selector).scrollTop($(selector).height());
		});
	};

	return service;
}];

export default Utils;