var require = {
	paths: {
		"$": "../bower_components/jquery/dist/jquery.min",
		"lodash": "../bower_components/lodash/lodash.min",
		"underscore": "../bower_components/underscore/underscore-min"
	},
	map: {
		"*": {
			"_": "lodash"
		}
	},
	config: {
		"main": {
			debug: true	
		}	
	}
};