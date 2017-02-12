const Message = ['$http', 'config', ($http, config) => {
	const service = {};

	service.get = function (query) {
		let url = `${config.api}/messages${query}`;
		return $http.get(url);
	};

	service.add = function (data) {
		let url = `${config.api}/messages`;
		return $http.post(url, data);
	};

	return service;
}];

export default Message;