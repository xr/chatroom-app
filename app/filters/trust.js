const trust = ['$sce', function($sce) {
	let div = document.createElement('div');
	return function (htmlCode) {
		div.innerHTML = htmlCode;
		return $sce.trustAsHtml(div.innerHTML);
	};
}];

export default trust;