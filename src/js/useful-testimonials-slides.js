/*
	Source:
	van Creij, Maurice (2014). "useful.testimonials.js: Simple scrolling testimonials.", version 20151215, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// create the constructor if needed
var useful = useful || {};
useful.Testimonials = useful.Testimonials || function () {};

// extend the prototype with the slides component
useful.Testimonials.prototype.Slides = function () {

	// PROPERTIES

	"use strict";
	this.context = null;
	this.config = {};

	// METHODS

	this.init = function (context) {
		// store the context
		this.context = context;
		this.config = context.config;
		// get the individual slides
		this.config.elements = this.config.element.querySelectorAll(this.config.tag);
		// resize the container
		this.onResize();
		// index the slides
		this.cycle();
		// set the event handler for resizing
		window.addEventListener('resize', this.onResize.bind(this));
		// return the object
		return this;
	};

	this.cycle = function () {
		var index = this.config.index, elements = this.config.elements, count = elements.length;
		// for all slides
		for (var a = 0, b = elements.length; a < b; a += 1) {
			// re-index the slide
			elements[a].className = 'testimonial-' + ((a + index + 1) % count);
		}
		// call for a redraw
		this.context.redraw();
	};

	this.cycleTo = function (index) {
		// update the index
		this.config.index = index % this.config.elements.length;
		// redraw the slides
		this.cycle();
	};

	this.cycleBy = function (delta) {
		var count = this.config.elements.length;
		// update the index
		this.config.index = (this.config.index + count + delta) % count;
		// redraw the slides
		this.cycle();
	};

	// EVENTS

	this.onResize = function () {
		var height, maxHeight = 0, elements = this.config.elements;
		// for all slides
		for (var a = 0, b = elements.length; a < b; a += 1) {
			// find the maximum height
			maxHeight = Math.max(elements[a].offsetHeight, maxHeight);
		}
		// apply the maximum height to the container
		this.config.element.style.minHeight = maxHeight + 'px';
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Testimonials.Slides;
}










/* EOF */
