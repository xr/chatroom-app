const chatCtrl = ['Utils', 'Message', 'Room', '$interval', '$rootScope', function (Utils, Message, Room, $interval, $rootScope) {
	const ctrl = this;

	this.messages = [Message.onboarding.shift()];
	this.page = 1;
	this.intervalId = null;
	this.noMsgs = false;
	this.room = {
		title: 'Welcome'
	};

	this.$onInit = () => {
		Utils.onScrollTop(20, ctrl.fetchMessages);
		$rootScope.$on('ws', ctrl.onWs);
	};

	this.$onChanges = (changes) => {
		if (!changes.roomId.isFirstChange()) {
			$interval.cancel(ctrl.intervalId);
			ctrl.noMsgs = false;
			ctrl.page = 1;
			this.fetchRoom(this.roomId);
		}
		
	};

	this.onWs = (event, data) => {
		if (data.rid === ctrl.room._id) {
			if (data.content.from._id !== $rootScope.user._id) {
				ctrl.messages.push(data.content);
				$rootScope.$digest();
				Utils.scrollBottom('#chatWindow');
				Utils.beep();
			}
		} else {
			// if the received rid is not current one
			// need to trigger the updateConversation event
			// the reason why we need to do this roundabout
			// is to avoid the frequently incoming events
			// when user is chatting within the same room
			$rootScope.$emit('updateConversation', data);
			Utils.beep();
		}
	};

	this.updateRoom = (room) => {
		let data = {};
		if (room.title !== this.room.title) {
			data.title = room.title;
		}
		data.desc = room.desc;
		data.logo = room.logo;
		Room.update(room._id, data).then(function (room) {
			ctrl.room = room.data.data;
		});
	};

	this.fetchRoom = (roomId) => {
		Room.getOne(roomId).then(function (room) {
			ctrl.room = room.data.data;
			ctrl.fetchMessages(roomId, true);
		}, Utils.handleError);
	};

	this.fetchMessages = (roomId, replace) => {
		if (this.noMsgs) {
			return;
		}
		roomId = roomId ? roomId : this.room._id;
		this.loading = true;
		let query = `?page=${this.page}&rid=${roomId}`;
		Message.get(query).then(function (messages) {
			if (!messages.data.data.messages.length) {
				ctrl.noMsgs = true;
			}
			let treatedMsgs = messages.data.data.messages.reverse();
			if (replace) {
				ctrl.messages = treatedMsgs;
			} else {
				Array.prototype.unshift.apply(ctrl.messages, treatedMsgs);
			}
			ctrl.page = messages.data.data.page + 1;
			ctrl.loading = false;
			Utils.scrollBottom('#chatWindow', !replace);
		}, Utils.handleError);
	};

	this.addMessage = (message) => {
		let data = {
			rid: this.room._id,
			content: message
		};
		Message.add(data).then(function (message) {
			let pushMsg = {
				from: {
					_id: message.data.data.from,
					fbid: $rootScope.user.fbid,
					name: $rootScope.user.name
				},
				content: message.data.data.content,
				created: message.data.data.created
			};
			window.socket.send({
              rid: ctrl.room._id,
              content: pushMsg
            });
			ctrl.messages.push(pushMsg);
			Utils.scrollBottom('#chatWindow');
		}, Utils.handleError);
	};

	this.join = (uid) => {
		Room.update(this.room._id, {
			uid: uid
		}).then(() => {
			ctrl.fetchRoom(ctrl.room._id);
		}, Utils.handleError);
	};

	// welcome messages
	this.intervalId = $interval(function () {
		if (Message.onboarding.length) {
			ctrl.messages.push(Message.onboarding.shift());
		} else {
			$interval.cancel(ctrl.intervalId);
		}
	}, 5000);

}];

export default chatCtrl;