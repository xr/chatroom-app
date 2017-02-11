const panelHeaderCtrl = ['$rootScope', ($rootScope) => {
	const vm = {};

	if ($rootScope.user) {
		vm.avatar = `http://graph.facebook.com/${$rootScope.user.fbid}/picture`;
	} else {
		vm.avatar = 'https://api.adorable.io/avatars/40/anonymous';
	}

	return vm;
}];

export default panelHeaderCtrl;