const User = ['$http', 'config', ($http, config) => {
	const service = {};

	service.get = function () {
		let url = `${config.api}/users/me`;
		return $http.get(url);
	};

	service.update = function (id, data) {
		let url = `${config.api}/users/${id}`;
		return $http.put(url, data);
	};

	service.getAll = function () {
		let url = `${config.api}/users`;
		return $http.get(url);
	};

	service.getNotifications = function () {
		let url = `${config.api}/notifications`;
		return $http.get(url);
	};

	return service;
}];

export default User;