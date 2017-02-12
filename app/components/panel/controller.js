const panelCtrl = ['Room', 'User', 'Utils', function (Room, User, Utils) {
	const ctrl = this;

	this.tab = 'Rooms';
	this.collections = [];
	this.pagination = {
		'Rooms': 1,
		'Conversations': 1,
		'Users': 1
	};

	this.$onInit = () => {
		this[`fetch${this.tab}`]();
	};

	this.select = (roomId) => {
		this.onSelect({ roomId: roomId });
	};

	this.change = (name) => {
		this.tab = name;
		this.loading = true;
		this.collections = [];
		this[`fetch${this.tab}`]();
	};

	this.add = (room) => {
		Room.create(room).then(() => {
			ctrl.fetchRooms();
		}, Utils.handleError);
	};

	this.fetchRooms = () => {
		let query = `?page=${this.pagination['Rooms']}`;
		Room.get(query).then((rooms) => {
			ctrl.loading = false;
			ctrl.collections = rooms.data.data.rooms;
		}, Utils.handleError);
	};

	this.fetchConversations = () => {
		User.getNotifications().then((notifications) => {
			ctrl.loading = false;
			ctrl.collections = notifications.data.data;
		}, Utils.handleError);
	};

	this.fetchUsers = () => {
		console.log('fetchUsers');
	};

}];

export default panelCtrl;