const panelHeaderCtrl = ['User', 'Utils', function (User, Utils) {

	this.updateUser = (event, id) => {
		User.update(id, { name: event.target.innerText}).then(() => {}, Utils.handleError);
	};

}];

export default panelHeaderCtrl;