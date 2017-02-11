const chatCtrl = ['Utils', 'Message', function (Utils, Message) {
	const ctrl = this;

	this.messages = [];
	this.page = 1;

	this.$onChanges = (changes) => {
		if (!changes.roomId.isFirstChange()) {
			console.log('this.roomId changed in chat controller', this.roomId);
			this.fetchMessages(this.roomId);
		}
		
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