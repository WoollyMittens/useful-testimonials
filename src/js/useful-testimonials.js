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
	exports = module.exports = useful.Testimonials;
}










/* EOF */
