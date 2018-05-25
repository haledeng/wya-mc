Component({
	properties: {
		type: {
			type: String,
			value: ''
		},
		styles: {
			type: String,
			value: ''
		}
	},
	externalClasses: ["icon-class"],
	methods: {
		handleClick() {
			this.triggerEvent('click', {}, {});
		}
	}
});