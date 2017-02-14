const panelListItem = {
  templateUrl: '/assets/tpls/panel/listItem.html',
  bindings: {
  	item: '<',
  	tab: '<',
  	onSelect: '&',
  	onCreate: '&'
  }
};

export default panelListItem;