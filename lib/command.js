(function() {
	/**
	 * Module dependencies.
	 */
	var fs = require('fs'),
		insertPrefix = require('./prefixcss');

	/**
	 * Parse arguments.
	 */
	var args = process.argv.slice(2),
		path = '.';

	if(args.length == 1) {
		var arg = args.shift();
		fs.readFile(arg, 'utf-8', function (err, data) {
			if (err) {
				throw err;
				console.error(str);
				process.exit(1);
			}
		  insertPrefix(data);
		});
	}

   /* while (args.length) {*/
	  //var arg = args.shift();
	  //switch (arg) {
		//case '-h':
		//case '--help':
		  //abort(usage);
		  //break;
		//case '-v':
		//case '--version':
		  //abort(version);
		  //break;
		//case '-s':
		//case '--session':
		//case '--sessions':
		  //sessions = true;
		  //break;
		//case '-c':
		//case '--css':
		  //args.length
			//? (cssEngine = args.shift())
			//: abort('--css requires an argument');
		  //break;
		//case '-t':
		//case '--template':
		  //args.length
			//? (templateEngine = args.shift())
			//: abort('--template requires an argument');
		  //break;
		//default:
			//path = arg;
	  //}
	//}

	exports.run = function() {
	}

	/**
	 * Exit with the given `str`.
	 *
	 * @param {String} str
	 */

	function abort(str) {
	  console.error(str);
	  process.exit(1);
	}

}).call(this);
