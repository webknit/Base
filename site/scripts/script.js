/* jshint ignore:start */

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


/* jshint ignore:end */
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


/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: Dev.js
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
	
	You can read more abotu this file - http://shaneprendergast.co.uk/web-design/dev-js/
*/


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMuanMiLCJzY3JpcHQuanMiLCJkZXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cbi8vIHVzYWdlOiBsb2coJ2luc2lkZSBjb29sRnVuYycsIHRoaXMsIGFyZ3VtZW50cyk7XG4vLyBwYXVsaXJpc2guY29tLzIwMDkvbG9nLWEtbGlnaHR3ZWlnaHQtd3JhcHBlci1mb3ItY29uc29sZWxvZy9cbndpbmRvdy5sb2cgPSBmdW5jdGlvbiBmKCl7IGxvZy5oaXN0b3J5ID0gbG9nLmhpc3RvcnkgfHwgW107IGxvZy5oaXN0b3J5LnB1c2goYXJndW1lbnRzKTsgaWYodGhpcy5jb25zb2xlKSB7IHZhciBhcmdzID0gYXJndW1lbnRzLCBuZXdhcnI7IGFyZ3MuY2FsbGVlID0gYXJncy5jYWxsZWUuY2FsbGVyOyBuZXdhcnIgPSBbXS5zbGljZS5jYWxsKGFyZ3MpOyBpZiAodHlwZW9mIGNvbnNvbGUubG9nID09PSAnb2JqZWN0JykgbG9nLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIG5ld2Fycik7IGVsc2UgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgbmV3YXJyKTt9fTtcblxuLy8gbWFrZSBpdCBzYWZlIHRvIHVzZSBjb25zb2xlLmxvZyBhbHdheXNcbihmdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7fWZvcih2YXIgYz1cImFzc2VydCxjb3VudCxkZWJ1ZyxkaXIsZGlyeG1sLGVycm9yLGV4Y2VwdGlvbixncm91cCxncm91cENvbGxhcHNlZCxncm91cEVuZCxpbmZvLGxvZyxtYXJrVGltZWxpbmUscHJvZmlsZSxwcm9maWxlRW5kLHRpbWUsdGltZUVuZCx0cmFjZSx3YXJuXCIuc3BsaXQoXCIsXCIpLGQ7ISEoZD1jLnBvcCgpKTspe2FbZF09YVtkXXx8Yjt9fSlcbihmdW5jdGlvbigpe3RyeXtjb25zb2xlLmxvZygpO3JldHVybiB3aW5kb3cuY29uc29sZTt9Y2F0Y2goYSl7cmV0dXJuICh3aW5kb3cuY29uc29sZT17fSk7fX0oKSk7XG5cblxuLy8gcGxhY2UgYW55IGpRdWVyeS9oZWxwZXIgcGx1Z2lucyBpbiBoZXJlLCBpbnN0ZWFkIG9mIHNlcGFyYXRlLCBzbG93ZXIgc2NyaXB0IGZpbGVzLlxuXG5cbi8qIGpzaGludCBpZ25vcmU6ZW5kICovIiwiLyogLSBCQVNFIEhUTUwgVEVNUExBVEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG5cdERlc2NyaXB0aW9uOiBKUyBTY3JpcHRzXG5cdEF1dGhvcjpTaGFuZSBQcmVuZGVyZ2FzdFxuXHRBdXRob3IgVVJMOmh0dHA6Ly93d3cud2Via25pdC5jby51a1xuXHRUZW1wbGF0ZSBVUkw6aHR0cDovL2Jhc2Uud2Via25pdC5jby51ay9cblx0XG5cdElmIHlvdSdyZSBub3QgdXNpbmcgR3J1bnQsIG9yIHdhbnQgdG8ga25vdyBob3cgdG8gdXNlIGdydW50LCB0aGVuIGhhdmUgYSByZWFkIG9mIHRoZSBmb2xsb3dpbmcgcG9zdCBmb3IgbW9yZSBpbmZvLlxuXHRodHRwOi8vc2hhbmVwcmVuZGVyZ2FzdC5jby51ay9jc3MvYS1ndWlkZS10by1iYXNlL1xuKi9cblxuLy8gSlMgRVhBTVBMRVxuXG52YXIgQmFzZSA9IEJhc2UgfHwge307XG5cbkJhc2UuZnVuY3Rpb25OYW1lID0gZnVuY3Rpb24oKSB7XG5cdFxuXHR2YXIgdmFyaWFibGUgPSAkKCcudmFyaWFibGUnKTtcblxuXHRmdW5jdGlvbiBpbml0KCkge1xuXG5cdFx0dmFyaWFibGUuY2xpY2soZnVuY3Rpb25PbmUpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBmdW5jdGlvbk9uZSgpIHtcblxuXHRcdC8vIEpTIENPREVcblxuXHR9XG5cblx0aW5pdCgpO1xuXHRcbn07XG5cbi8vIE9OIERPQyBSRUFEWVxuJChmdW5jdGlvbigpIHtcblx0XG5cdG5ldyBCYXNlLmZ1bmN0aW9uTmFtZSgpO1xuXHRcbn0pO1xuXG4iLCIvKiAtIEJBU0UgSFRNTCBURU1QTEFURVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcblx0RGVzY3JpcHRpb246IERldi5qc1xuXHRBdXRob3I6U2hhbmUgUHJlbmRlcmdhc3Rcblx0QXV0aG9yIFVSTDpodHRwOi8vd3d3LndlYmtuaXQuY28udWtcblx0VGVtcGxhdGUgVVJMOmh0dHA6Ly9iYXNlLndlYmtuaXQuY28udWsvXG5cdFxuXHRZb3UgY2FuIHJlYWQgbW9yZSBhYm90dSB0aGlzIGZpbGUgLSBodHRwOi8vc2hhbmVwcmVuZGVyZ2FzdC5jby51ay93ZWItZGVzaWduL2Rldi1qcy9cbiovXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==