const auth = [() => {
	const service = {};

	/*=======================================
	=            auth interfaces            =
	=======================================*/
	service.isLogged = isLogged;



	/*======================================
	=            Implementation            =
	======================================*/

	function isLogged() {
		return true;
	}

	return service;
}];

export default auth;