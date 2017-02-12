const control = {
  templateUrl: '/assets/tpls/chat/control.html',
  bindings: {
  	room: '<',
  	onUpdate: '&'
  },
  controller: [function () {
  	this.$onChanges = (changes) => {
		this.roomCopy = angular.copy(this.room);
  		console.log('this.roomCopy', this.roomCopy);
	};
  }]
};

export default control;