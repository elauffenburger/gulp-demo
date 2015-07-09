define([
	"extra"
], function(extra) {
	var exports = {
		sayHello: sayHello,
		makeRequest: extra.makeRequest
	};
	
	return exports;
	
	//////////
	
	function sayHello(name) {
		console.debug("Hi, " + name);
	}
});