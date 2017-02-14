const panelCtrl = ['Room', 'User', 'Utils', '$rootScope', function (Room, User, Utils, $rootScope) {
	const ctrl = this;

	this.tab = 'Rooms';
	this.collections = [];
	this.highlight = null;
	this.pagination = {
		'Rooms': 1,
		'Conversations': 1,
		'Users': 1
	};

	this.$onInit = () => {
		this[`fetch${this.tab}`]();
		window.socket.on('o2o', ctrl.o2o);
		$rootScope.$on('updateConversation', ctrl.onConversation);
	};

	this.select = (roomId) => {
		this.onSelect({ roomId: roomId });
	};

	this.create = (user) => {
		if (user._id !== $rootScope.user._id) {
			Room.create({
				title: user.fbid,
				desc: `${user.name}`,
				private: 1
			}).then((res) => {
				Room.update(res.data.data._id, {
					uid: user._id
				}).then((res) => {
					ctrl.change('Conversations');
				}, Utils.handleError);
			}, (err) => {
				ctrl.change('Conversations');
			});
		}
	};

	this.o2o = () => {
		if (ctrl.tab === 'Users') {
			ctrl.fetchUsers();
		}
	};

	this.onConversation = (event, data) => {
		// received the new conversation
		if (ctrl.tab !== 'Conversations') {
			// if tab is not conversation
			// need high light the conversation tab
			this.highlight = 'Conversations';
			$rootScope.$digest();
		} else if ($rootScope.user.rooms.indexOf(data.rid) === -1) {
			// if the new conversation do not exisits before
			// then just fetch it
			ctrl.fetchConversations();
		} else {
			// if tab is converstaion
			// need high the msg
			ctrl.collections.forEach((item) => {
				if (item.room._id === data.rid) {
					item.unread = true;
				}
			});
			$rootScope.$digest();
		}
	};

	this.change = (name) => {
		this.tab = name;
		this.loading = true;
		this.highlight = null;
		this.collections = [];
		this[`fetch${this.tab}`]();
	};

	this.add = (room) => {
		Room.create(room).then(() => {
			ctrl.change('Rooms');
		}, Utils.handleError);
	};

	this.fetchRooms = () => {
		let query = `?page=${this.pagination['Rooms']}`;
		Room.get(query).then((rooms) => {
			ctrl.handleSuccess(rooms.data.data.rooms);
		}, Utils.handleError);
	};

	this.fetchConversations = () => {
		User.getNotifications().then((notifications) => {
			ctrl.handleSuccess(notifications.data.data);
		}, Utils.handleError);
	};

	this.fetchUsers = () => {
		User.getAll().then((users) => {
			ctrl.handleSuccess(users.data.data.users);
		}, Utils.handleError);
	};

	this.handleSuccess = (data) => {
		this.loading = false;
		this.collections = data;
	};

}];

export default panelCtrl;