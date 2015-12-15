/*
	Source:
	van Creij, Maurice (2014). "useful.testimonials.js: Simple scrolling testimonials.", version 20151215, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// create the constructor if needed
var useful = useful || {};
useful.Testimonials = useful.Testimonials || function () {};

// extend the prototype with the chevrons component
useful.Testimonials.prototype.Touch = function () {

	// PROPERTIES

	"use strict";
	this.context = null;
	this.config = {};

	// METHODS

	this.init = function (context) {
		// store the context
		this.context = context;
		this.config = context.config;
		// set up the touch controls
		if (useful.Gestures) {
			this.gestures = new useful.Gestures().init({
				'element' : this.config.element,
				'threshold' : 50,
				'filter' : 1,
				'increment' : 0.1,
				'cancelTouch' : true,
				'cancelGesture' : true,
				'swipeLeft' : this.onSwipedLeft.bind(this),
				'swipeRight' : this.onSwipedRight.bind(this)
			});
		}
		// return the object
		return this;
	};

	// EVENTS

	this.onSwipedLeft = function (output) {
		this.context.cycleBy(1);
	};

	this.onSwipedRight = function (output) {
		this.context.cycleBy(-1);
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Testimonials.Pips;
}










/* EOF */
