const appCtrl = [function () {
	const ctrl = this;
	this.roomId = null;

	this.onSelect = (roomId) => {
		this.roomId = roomId;
	};
}];

export default appCtrl;