/*globals io:false */
const onRun = ['User', '$rootScope', 'config', (User, $rootScope, config) => {
	$rootScope.loading = true;
	$rootScope.config = config;

	User.get().then((user) => {
		console.log('user', user);
		$rootScope.user = user.data.data;
		$rootScope.loading = false;

		// register socket
		window.socket = io(config.ws);
		window.socket.on('error', function(err){
           alert(err);
        });
        window.socket.on($rootScope.user._id, function(data){
          console.log('get events....', data);
          $rootScope.$emit('ws', data);
        });
	}, (err) => {
		console.log('err', err);
		$rootScope.loading = false;
	});
}];

export default onRun;
