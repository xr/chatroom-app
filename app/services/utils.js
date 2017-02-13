/*globals $:false */
const Utils = [() => {
	const service = {};

	service.handleError = function (err) {
		console.error(err);
	};

	service.scrollBottom = function (selector, avoid) {
		if (!avoid) {
			setTimeout(function () {
				$(selector).scrollTop($(selector).prop('scrollHeight'));
			});
		}
	};

	service.onScrollTop = function (px, cb) {
		$('#chatWindow').on('scroll', function() {
			if ($(this).scrollTop() < px) {
				cb();
			}
		});
	};

	return service;
}];

export default Utils;