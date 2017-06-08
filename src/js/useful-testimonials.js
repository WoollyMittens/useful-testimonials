/*
	Source:
	van Creij, Maurice (2014). "useful.testimonials.js: Simple scrolling testimonials.", version 20151215, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// create the constructor if needed
var useful = useful || {};
useful.Testimonials = useful.Testimonials || function () {};

// extend the prototype with the init function
useful.Testimonials.prototype.init = function (config) {
	// turn on strict mode
	"use strict";
	// default config
	this.config = {
		'index': 0,
		'tag': 'blockquote',
		'pips': true,
		'chevrons': true,
		'idle': 4000
	};
	// store the config
	for (var name in config) { this.config[name] = config[name]; }
	// combine the redraw functions
	this.redraw = function () {
		if (this.pips) { this.pips.redraw(); }
	};
	// bind the components
	this.slides = new this.Slides().init(this);
	this.chevrons = new this.Chevrons().init(this);
	this.pips = new this.Pips().init(this);
	this.touch = new this.Touch().init(this);
	this.idle = new this.Idle().init(this);
	// expose public functions
	this.cycleTo = this.slides.cycleTo.bind(this.slides);
	this.cycleBy = this.slides.cycleBy.bind(this.slides);
	// return the object
	return this;
};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Testimonials;
}









/* EOF */
