const avatar = [function() {
  return function (id) {
  	return `http://graph.facebook.com/${id}/picture`;
  };
}];

export default avatar;