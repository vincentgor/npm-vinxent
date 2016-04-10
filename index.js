'use strict'

class vinxent {
	constructor (name) {
		this.name = name;
	}
	test(data) {
		console.log('welcome,', this.name);
		console.log('your input is', data);
	}
}

module.exports = vinxent;