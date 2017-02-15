const control = {
  templateUrl: '/assets/tpls/chat/control.html',
  bindings: {
  	room: '<',
  	onUpdate: '&',
  	onJoin: '&'
  },
  controller: 'controlCtrl'
};

export default control;