const message = {
  templateUrl: '/assets/tpls/chat/message.html',
  bindings: {
  	message: '<',
  	pre: '<'
  },
  controller: ['marked', function (marked) {
  	this.$onInit = () => {
		this.message.content = marked(this.message.content);
  	};
  }]
};

export default message;