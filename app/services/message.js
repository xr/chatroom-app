const Message = ['$http', 'config', 'moment', ($http, config, moment) => {
	const service = {};

	service.get = function (query) {
		let url = `${config.api}/messages${query}`;
		return $http.get(url);
	};

	service.add = function (data) {
		let url = `${config.api}/messages`;
		return $http.post(url, data);
	};

	service.onboarding = [
		{
			content: 'Welcome, I\'m Robot.C, here are the few tips:',
			from: {
				_id: '001',
				avatar: 'http://ob0btlsu6.bkt.clouddn.com/chat-bot.png',
				name: 'Robot.C'
			},
			created: moment().format()
		},
		{
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
		}
	];

	return service;
}];

export default Message;