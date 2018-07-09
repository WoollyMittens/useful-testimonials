// extend the class
Testimonials.prototype.Touch = function (context) {

	// PROPERTIES

	this.context = null;
	this.config = {};

	// METHODS

	this.init = function (context) {
		// store the context
		this.context = context;
		this.config = context.config;
		// set up the touch controls
		if (Gestures) {
			this.gestures = new Gestures({
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
	};

	// EVENTS

	this.onSwipedLeft = function (output) {
		this.context.cycleBy(1);
	};

	this.onSwipedRight = function (output) {
		this.context.cycleBy(-1);
	};

	this.init(context);
};
