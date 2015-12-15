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
useful.Testimonials.prototype.Idle = function () {

	// PROPERTIES

	"use strict";
	this.context = null;
	this.config = {};

	// METHODS

	this.init = function (context) {
		// store the context
		this.context = context;
		this.config = context.config;
		// if there is a idle timeout
		if (this.config.idle > 0) {
			// detect interactions
			this.config.element.addEventListener('mouseover', this.onCancelIdle.bind(this));
			this.config.element.addEventListener('mouseout', this.onResumeIdle.bind(this));
			this.config.element.addEventListener('touchstart', this.onCancelIdle.bind(this));
			// set up the idle timer
			this.onResumeIdle();
		}
		// return the object
		return this;
	};

	// EVENTS

	this.onCancelIdle = function () {
		clearInterval(this.interval);
	};

	this.onResumeIdle = function () {
		this.interval = setInterval(this.onIdleTimeout.bind(this), this.config.idle);
	};

	this.onIdleTimeout = function () {
		// cycle the next slide
		this.context.cycleBy(1);
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Testimonials.Idle;
}










/* EOF */
