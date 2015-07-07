define([
	"extra",
	"module"
], function(extra, module) {
	var exports = {
		sayHello: sayHello,
		makeRequest: extra.makeRequest
	};
	
	if(module.config().debug) {
		window.myModule = exports;	
	}
	
	return exports;
	
	//////////
	
	function sayHello(name) {
		console.debug("Hi, " + name);
	}
});