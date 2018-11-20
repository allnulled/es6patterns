// >> export module to ES6PatternsAPI

/**
 * 
 * # es6patterns
 * 
 * 
 * ![](https://img.shields.io/badge/es6patterns-v1.0.0-green.svg) ![](https://img.shields.io/badge/coverage-%2B95%25-green.svg) 
 * 
 * 
 * Set of design patterns and similar utilities for EcmaScript6 syntax (for browsers and `node.js`).
 * 
 * ## Installation
 * 
 * ~$ `npm install --save es6patterns`
 * 
 * ## Usage
 * 
 * Get the API:
 * 
 * Once you install the module, either with `node.js`, `browserify`, `webpack`, or simply a `<script>` tag in the `html` page, to get the API you can:
 * 
 * a) Via `require`/`import`, then:
 * 
 * ```js
 * const ES6Patterns = require("es6patterns");
 * ```
 * 
 * b) Via `<script src=...>`, then:
 * 
 * ```js
 * const ES6Patterns = window.ES6PatternsAPI;
 * ```
 * 
 * ## API
 * 
 * 
 */


/**
 * 
 * **`Singleton = ES6Patterns.Singleton`**
 * 
 * @type `Class`
 * @description A `Singleton Pattern` implementation scoped *per context* (`window` or `global`).
 * 
 */
class Singleton {


	/** 
	 * 
	 * **`Singleton.getUniqueStore()`**
	 * 
	 * @access `Static`
	 * @type `Method`
	 * @returns `Object`. The `store` with all the `key`s.
	 * @description
	 * This method returns the map that holds all the keys of the singleton store.
	 * This data is attached (indirectly) to the context, which is `window` or `global`.
	 * This method is aimed for internal usage but it is available for anyone too.
	 * 
	 */
	static getUniqueStore() {
		const context = (typeof global === "object") ? global : window;
		if(!("__ES6Patterns_INTERNALS_SINGLETON__" in context)) {
			context.__ES6Patterns_INTERNALS_SINGLETON__ = {};
		}
		return context.__ES6Patterns_INTERNALS_SINGLETON__;
	}
	
	/** 
	 * 
	 * **`Singleton.getter(String:key, Function:initializer)`**
	 * 
	 * @access `Static`
	 * @type `Method`
	 * @parameter `String:key`. Unique string identifier of the desired key. 
	 * @parameter `Function:initializer`. Optional. Function that returns the initial value of the singleton if the `key` is not found in the `store` yet. By default: `() => undefined''.
	 * @returns `Function`. A `getter` for the value hold in the `store` identified by the `key`.
	 * @description
	 * This method returns a function that, when called, it returns the value of the `store` identified by the provided `key`.
	 * This method also provides a lazy-loading initialization of the singleton values, by default, which can be overriden calling `set` method whenever is desired..
	 * 
	 */
	static getter(key, initializer = () => undefined) {
		const uniqueStore = this.getUniqueStore();
		return function() {
			if(!(key in uniqueStore)) {
				uniqueStore[key] = initializer();
			}
			return uniqueStore[key];
		}
	}

	/** 
	 * 
	 * **`Singleton.setter(String:key)`**
	 * 
	 * @type `Method`
	 * @access `Static`
	 * @parameter `String:key`.
	 * @returns `Function`. A `setter` for the value hold in the `store` identified by the `key`.
	 * @description
	 * This method returns a function that, when called, it sets the value of the `store` identified by the provided `key` to the provided `value`.
	 * The function also returns the current value of the `key` in the `store`.
	 * 
	 * 
	 */
	static setter(key) {
		const uniqueStore = this.getUniqueStore();
		return function(newValue) {
			uniqueStore[key] = newValue;
			return uniqueStore[key];
		}
	}

	/** 
	 * 
	 * **`Singleton.get(key, initializer = () => undefined)`**
	 * 
	 * @type `Method`
	 * @access `Static`
	 * @parameter `String:key`. Unique string identifier of the desired key. 
	 * @parameter `Function:initializer`. Optional. Function that returns the initial value of the singleton if the `key` is not found in the `store` yet. By default: `() => undefined''.
	 * @returns `Any`. The new value of the `key` in the `store`.
	 * @description
	 * This method returns the value of the provided `key` in the `store`.
	 * 
	 */
	static get(key, initializer = () => undefined) {
		return this.getter(key, initializer)();
	}

	/** 
	 * 
	 * **`Singleton.set(String:key, Any:value)`**
	 * 
	 * @type `Method`
	 * @access `Static`
	 * @parameter `String:key`. Unique string identifier of the desired key. 
	 * @parameter `Any:value`. Optional. Function that returns the initial value of the singleton if the `key` is not found in the `store` yet. By default: `() => undefined''.
	 * @returns `Any`. The new value of the `key` in the `store`.
	 * @description
	 * This method sets the `value` to the provided `key` in the `store`.
	 * 
	 */
	static set(key, value) {
		return this.setter(key)(value);
	}

}

/**
 * 
 * # Examples
 * 
 * The API is decoupled in different `design patterns` and similar `utilities` under the API object.
 * 
 * To see more of each example, take a look to the `test` folder. Tests are written using `mocha` and `chai`.
 * 
 * # Commands
 * 
 * The commands of the project are the `npm` commands listed at `package.json#scripts`.
 * 
 * # License
 * 
 * MIT License.
 * 
 * # Conclusions
 * 
 * Soon, more.
 * 
 * 
 * 
 * 
 */

// >> export module
module.exports = {Singleton};