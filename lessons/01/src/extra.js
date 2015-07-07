define([
	"$"
], function($) {
	var exports = {
		makeRequest: makeRequest
	};
	
	init();
	
	return exports;
	
	//////////
	
	function init() {
		
	}
	
	function makeRequest(args, cb) {
		$.ajax(args).then(function(data) {
			cb(data);
		});
	}
});