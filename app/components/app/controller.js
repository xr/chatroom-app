const appCtrl = [function () {
	const ctrl = this;
	this.roomId = null;

	this.onSelect = (roomId) => {
		console.log('get roomId from app', roomId);
		this.roomId = roomId;
	};
}];

export default appCtrl;