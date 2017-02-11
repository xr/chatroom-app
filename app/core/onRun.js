const onRun = ['User', '$rootScope', 'config', (User, $rootScope, config) => {
	$rootScope.loading = true;
	$rootScope.config = config;

	User.get().then((user) => {
		console.log('user', user);
		$rootScope.user = user.data.data;
		$rootScope.loading = false;
	}, (err) => {
		console.log('err', err);
		$rootScope.loading = false;
	});
}];

export default onRun;
