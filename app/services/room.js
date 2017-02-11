const Room = ['$http', 'config', ($http, config) => {
	const service = {};

	service.get = function (query) {
		let url = `${config.api}/rooms${query}`;
		return $http.get(url);
	};

	return service;
}];

export default Room;