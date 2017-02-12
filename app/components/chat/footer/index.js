const footer = {
  templateUrl: '/assets/tpls/chat/footer.html',
  bindings: {
  	addMessage: '&',
  	room: '<'
  },
  controller: 'footerCtrl'
};

export default footer;