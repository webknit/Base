/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
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

