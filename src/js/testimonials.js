/*
	Source:
	van Creij, Maurice (2018). "testimonials.js: Simple scrolling testimonials.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Testimonials = function (config) {
	// default config
	this.config = {
		'index': 0,
		'tag': 'blockquote',
		'pips': true,
		'chevrons': true,
		'idle': 4000
	};
	// store the config
	for (var key in config) { this.config[key] = config[key]; }
	// combine the redraw functions
	this.redraw = function () {
		if (this.pips) { this.pips.redraw(); }
	};
	// bind the components
	this.slides = new this.Slides(this);
	this.chevrons = new this.Chevrons(this);
	this.pips = new this.Pips(this);
	this.touch = new this.Touch(this);
	this.idle = new this.Idle(this);
	// expose public functions
	this.cycleTo = this.slides.cycleTo.bind(this.slides);
	this.cycleBy = this.slides.cycleBy.bind(this.slides);
	// return the object
	return this;
};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = Testimonials;
}
