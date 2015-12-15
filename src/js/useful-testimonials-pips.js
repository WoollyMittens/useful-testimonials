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
useful.Testimonials.prototype.Pips = function () {

	// PROPERTIES

	"use strict";
	this.context = null;
	this.config = {};
	this.nav = null;
	this.pips = [];

	// METHODS

	this.init = function (context) {
		// store the context
		this.context = context;
		this.config = context.config;
		// add the navigation container if desired
		if (this.config.pips) { this.addNavigation(); }
		// return the object
		return this;
	};

	this.addNavigation = function () {
		// create the toolbar
		this.nav = document.createElement('nav');
		this.nav.className = 'testimonials-pips';
		this.config.element.appendChild(this.nav);
		// for every slide
		var elements = this.config.elements;
		for (var a = 0, b = elements.length; a < b; a += 1) {
			// create a pip
			this.pips[a] = document.createElement('a');
			this.pips[a].innerHTML = a + 1;
			this.pips[a].setAttribute('href', '#');
			this.pips[a].addEventListener('click', this.onPipClicked.bind(this, a));
			this.nav.appendChild(this.pips[a]);
		}
		// activate the correct pip
		this.redraw();
	};

	this.redraw = function () {
		// for all pips
		for (var a = 0, b = this.pips.length; a < b; a += 1) {
			// set the pip active or not
			this.pips[a].className = (a === this.config.index) ? 'testimonials-pips-active' : '';
		}
	};

	// EVENTS

	this.onPipClicked = function (index, evt) {
		// cancel the actual click
		evt.preventDefault();
		// cycle the slides
		this.context.cycleTo(index);
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Testimonials.Pips;
}










/* EOF */
