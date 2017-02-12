const controlCtrl = [function () {
	const ctrl = this;

	this.$onChanges = (changes) => {
		this.roomCopy = angular.copy(this.room);
	};

	this.isMember = (uid) => {
		return this.room.users.find((user) => {
			return user._id === uid;
		});
	};


}];

export default controlCtrl;