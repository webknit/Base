/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
	
	If you're not using Grunt, or want to know how to use grunt, then have a read of the following post for more info.
	http://shaneprendergast.co.uk/css/a-guide-to-base/
*/

// JS EXAMPLE

var Base = Base || {};

Base.functionName = function() {
	
	var variable = $('.variable');

	function init() {

		variable.click(functionOne);

	}

	function functionOne() {

		// JS CODE

	}

	init();
	
};

// ON DOC READY
$(function() {
	
	new Base.functionName();
	
});

