const Room = ['$http', 'config', ($http, config) => {
	const service = {};

	service.get = function (query) {
		let url = `${config.api}/rooms${query}`;
		return $http.get(url);
	};

	service.getOne = function (id) {
		let url = `${config.api}/rooms/${id}`;
		return $http.get(url);
	};

	return service;
}];

export default Room;