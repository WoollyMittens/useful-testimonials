// extend the class
Testimonials.prototype.Pips = function (context) {

	// PROPERTIES

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

	this.init(context);

};
