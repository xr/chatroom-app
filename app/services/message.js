const Message = ['$http', 'config', ($http, config) => {
	const service = {};

	service.get = function (query) {
		let url = `${config.api}/messages${query}`;
		return $http.get(url);
	};

	return service;
}];

export default Message;