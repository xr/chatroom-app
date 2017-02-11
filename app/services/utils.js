const Utils = [() => {
	const service = {};

	service.handleError = function (err) {
		console.error(err);
	};

	return service;
}];

export default Utils;