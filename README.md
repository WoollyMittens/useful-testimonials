# testimonials.js: Simple scrolling testimonials

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

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

Or use imported as a component in existing projects.

```js
@import {Gestures = require('lib/gestures.js";
@import {Testimonials} from "js/testimonials.js";
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

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
