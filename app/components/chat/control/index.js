const control = {
  templateUrl: '/assets/tpls/chat/control.html',
  bindings: {
  	room: '<',
  	onUpdate: '&'
  },
  controller: 'controlCtrl'
};

export default control;