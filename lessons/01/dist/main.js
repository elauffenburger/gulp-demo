define([
	"extra"
], function(extra) {
	var exports = {
		sayHello: sayHello,
		makeRequest: extra.makeRequest
	};
	
	return exports;
	
	if(module.config().debug) {
		window.myModule = exports;	
	}
	
	//////////
	
	function sayHello(name) {
		console.debug("Hi, " + name);
	}
});