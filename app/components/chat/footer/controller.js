const footerCtrl = [function () {
	const ctrl = this;

	this.content = null;

	this.monitor = (event) => {
		// shiftKey
		if (event.code === 'Enter' && event.shiftKey) {
			event.preventDefault();
			ctrl.submit();
		}
	};

	this.submit = () => {
		this.addMessage({
			message: this.content
		});

		this.content = null;
	};

}];

export default footerCtrl;