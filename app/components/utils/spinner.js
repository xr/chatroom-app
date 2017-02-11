const spinner = {
  template: `
  	<div class="spinner">
  		<i ng-class="$ctrl.color ? 'fa fa-2x fa-spin fa-spinner black' : 'fa fa-2x fa-spin fa-spinner'" aria-hidden="true"></i>
  	</div>
  `,
  bindings: {
  	color: '@'
  }
};

export default spinner;