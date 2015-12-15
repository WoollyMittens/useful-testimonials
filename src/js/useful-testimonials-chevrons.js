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
useful.Testimonials.prototype.Chevrons = function () {

	// PROPERTIES

	"use strict";
	this.context = null;
	this.config = {};
	this.nav = null;
	this.next = null;
	this.prev = null;

	// METHODS

	this.init = function (context) {
		// store the context
		this.context = context;
		this.config = context.config;
		// add the navigation container if desired
		if (this.config.chevrons) { this.addNavigation(); }
		// return the object
		return this;
	};

	this.addNavigation = function () {
		// create the toolbar
		this.nav = document.createElement('nav');
		this.nav.className = 'testimonials-chevrons';
		this.config.element.appendChild(this.nav);
		// add the next arrow
		this.next = document.createElement('a');
		this.next.innerHTML = 'next';
		this.next.setAttribute('href', '#');
		this.next.className = 'testimonials-next';
		this.next.addEventListener('click', this.onNextClicked.bind(this));
		this.nav.appendChild(this.next);
		// add the previous arrow
		this.prev = document.createElement('a');
		this.prev.innerHTML = 'previous';
		this.prev.setAttribute('href', '#');
		this.prev.className = 'testimonials-prev';
		this.prev.addEventListener('click', this.onPrevClicked.bind(this));
		this.nav.appendChild(this.prev);
	};

	// EVENTS

	this.onNextClicked = function (evt) {
		// cancel the actual click
		evt.preventDefault();
		// cycle the slides
		this.context.cycleBy(1);
	};

	this.onPrevClicked = function (evt) {
		// cancel the actual click
		evt.preventDefault();
		// cycle the slides
		this.context.cycleBy(-1);
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Testimonials.Chevrons;
}










/* EOF */
