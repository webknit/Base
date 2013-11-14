/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/

// JS EXAMPLE

var Base = Base || {};

Base.functionName = function()
{	
	var self = $(this);
	var variable = $('.var');

	function init()
	{
		variable.click(functionOne);
		functionTwo();
	}

	function functionOne()
	{
		// JS CODE
	}

	function functionTwo()
	{
		// JS CODE
		window.hide();
	}

	init();
};

// ON DOC READY
$(function()
{	
	new Base.functionName();
	
});

