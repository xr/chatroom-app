const chatCtrl = ['Utils', 'Message', 'Room', '$interval', 'moment', function (Utils, Message, Room, $interval, moment) {
	const ctrl = this;

	this.messages = [{
		content: 'Welcome, I\'m Robot.C, here are the few tips:',
		from: {
			_id: '001',
			avatar: 'http://ob0btlsu6.bkt.clouddn.com/chat-bot.png',
			name: 'Robot.C'
		},
		created: moment().format()
	}];

	this.room = {
		title: 'Welcome'
	};
	this.page = 1;
	this.intervalId = null;

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




	// welcome messages
	const welcomeMsgs = [{
		content: 'You need to login with facebook before you can chat with others. (Sorry!)',
		from: {
			_id: '001',
			avatar: 'http://ob0btlsu6.bkt.clouddn.com/chat-bot.png',
			name: 'Robot.C'
		},
		created: moment().format()
	}, {
		content: 'There are three tabs in the left panel, they are public rooms, conversations and all users',
		from: {
			_id: '001',
			avatar: 'http://ob0btlsu6.bkt.clouddn.com/chat-bot.png',
			name: 'Robot.C'
		},
		created: moment().format()
	}, {
		content: `You can view each public room and there will have a JOIN button in the top right corner of the chat window, which 
		you can join if you like`,
		from: {
			_id: '001',
			avatar: 'http://ob0btlsu6.bkt.clouddn.com/chat-bot.png',
			name: 'Robot.C'
		},
		created: moment().format()
	}, {
		content: `Of course, you can also create you new room, if you are the owner of the room, there will be a "Edit" button 
		in the top right corner of the chat window.`,
		from: {
			_id: '001',
			avatar: 'http://ob0btlsu6.bkt.clouddn.com/chat-bot.png',
			name: 'Robot.C'
		},
		created: moment().format()
	}, {
		content: `That's it, thank you again!`,
		from: {
			_id: '001',
			avatar: 'http://ob0btlsu6.bkt.clouddn.com/chat-bot.png',
			name: 'Robot.C'
		},
		created: moment().format()
	}];

	this.intervalId = $interval(function () {
		if (welcomeMsgs.length) {
			ctrl.messages.push(welcomeMsgs.shift());
		} else {
			$interval.cancel(ctrl.intervalId);
		}
	}, 5000);

}];

export default chatCtrl;