const chatCtrl = ['Utils', 'Message', 'Room', function (Utils, Message, Room) {
	const ctrl = this;

	this.messages = [];
	this.room = null;
	this.page = 1;

	this.$onChanges = (changes) => {
		if (!changes.roomId.isFirstChange()) {
			console.log('this.roomId changed in chat controller', this.roomId);
			this.fetchRoom(this.roomId);
		}
		
	};

	this.fetchRoom = (roomId) => {
		Room.getOne(roomId).then(function (room) {
			ctrl.room = room.data.data;
			ctrl.fetchMessages(roomId);
		}, Utils.handleError);
	};

	this.fetchMessages = (roomId) => {
		this.loading = true;
		let query = `?page=${this.page}&rid=${roomId}`;
		Message.get(query).then(function (messages) {
			console.log('messages', messages);
			ctrl.messages = messages.data.data.messages.reverse();
			ctrl.page = messages.data.data.page;
			ctrl.loading = false;
		}, Utils.handleError);
	};

}];

export default chatCtrl;