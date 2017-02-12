const footerCtrl = ['$scope', function ($scope) {
	const ctrl = this;

	this.content = null;

	$scope.submit = () => {
		this.addMessage({
			message: this.content
		});

		this.content = null;
	};

}];

export default footerCtrl;