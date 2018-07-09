// extend the class
Testimonials.prototype.Idle = function (context) {

	// PROPERTIES

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

	this.init(context);
};
