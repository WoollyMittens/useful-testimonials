# testimonials.js: Simple scrolling testimonials

Turn a list of testimonials into a slideshow.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/testimonials.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="lib/gestures.js"></script>
<script src="js/testimonials.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'lib/gestures.js',
	'js/testimonials.js'
], function(Gestures, Testimonials) {
	...
});
```

Or import into an MVC framework.

```js
var Gestures = require('lib/gestures.js');
var Testimonials = require('js/testimonials.js');
```

## How to start the script

```html
<div class="testimonials">
	<blockquote>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		<footer>Lorem <b>Ipsum Dolor</b></footer>
	</blockquote>
	...
</div>
```

**...** - For proper animation there should ideally be three or more quotes.

```javascript
var testimonials = new Testimonials({
	'element': document.querySelector('.testimonials'),
	'tag': 'blockquote',
	'pips': true,
	'chevrons': true,
	'idle': 8000
});
```

**element : {DOM Element}** - The container around the quotes.

**tag : {string}** - The HTML tag used for the individual quotes.

**pips : {boolean}** - Whether to render the navigation pips.

**chevron : {boolean}** - Whether to render the navigation arrows.

**idle : {integer}** - The HTML tag used for the individual quotes.

## How to control the script ##

### cycleTo

```javascript
testimonials.cycleTo(index);
```

Shows a specific testimonial.

**index : {integer}** - The number of the slide to show.

### cycleBy

```javascript
testimonials.cycleBy(delta);
```

Shows a next or previous slide.

**delta : {integer}** - The number of the slides to skip from the current one.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
