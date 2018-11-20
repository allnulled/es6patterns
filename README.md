 


# `es6patterns`

Set of design patterns and similar utilities for EcmaScript6 syntax (for browsers and `node.js`).

## Installation

~$ `npm install --save es6patterns`

## Usage

### Get the API:

Once you install the module, either with `node.js`, `browserify`, `webpack`, or simply a `<script>` tag in the `html` page, to get the API you can:

```js
const ES6Patterns = require("es6patterns");
```

Or:

```js
const ES6Patterns = window.ES6PatternsAPI;
```

## API





 


### `Singleton = ES6Patterns.Singleton`


**Type:** `Class`

**Description:** A `Singleton Pattern` implementation scoped *per context* (`window` or `global`).




 


### `Singleton.getUniqueStore()`


**Access:** `Static`

**Type:** `Method`

**Returns:** `Object`. The `store` with all the `key`s.

**Description:** 
This method returns the map that holds all the keys of the singleton store.
This data is attached (indirectly) to the context, which is `window` or `global`.
This method is aimed for internal usage but it is available for anyone too.




 


### `Singleton.getter(String:key, Function:initializer)`


**Access:** `Static`

**Type:** `Method`

**Parameter:** `String:key`. Unique string identifier of the desired key. 

**Parameter:** `Function:initializer`. Optional. Function that returns the initial value of the singleton if the `key` is not found in the `store` yet. By default: `() => undefined''.

**Returns:** `Function`. A `getter` for the value hold in the `store` identified by the `key`.

**Description:** 
This method returns a function that, when called, it returns the value of the `store` identified by the provided `key`.
This method also provides a lazy-loading initialization of the singleton values, by default, which can be overriden calling `set` method whenever is desired..




 


### `Singleton.setter(String:key)`


**Type:** `Method`

**Access:** `Static`

**Parameter:** `String:key`.

**Returns:** `Function`. A `setter` for the value hold in the `store` identified by the `key`.

**Description:** 
This method returns a function that, when called, it sets the value of the `store` identified by the provided `key` to the provided `value`.
The function also returns the current value of the `key` in the `store`.





 


### `Singleton.get(key, initializer = () => undefined)`


**Type:** `Method`

**Access:** `Static`

**Parameter:** `String:key`. Unique string identifier of the desired key. 

**Parameter:** `Function:initializer`. Optional. Function that returns the initial value of the singleton if the `key` is not found in the `store` yet. By default: `() => undefined''.

**Returns:** `Any`. The new value of the `key` in the `store`.

**Description:** 
This method returns the value of the provided `key` in the `store`.




 


### `Singleton.set(String:key, Any:value)`


**Type:** `Method`

**Access:** `Static`

**Parameter:** `String:key`. Unique string identifier of the desired key. 

**Parameter:** `Any:value`. Optional. Function that returns the initial value of the singleton if the `key` is not found in the `store` yet. By default: `() => undefined''.

**Returns:** `Any`. The new value of the `key` in the `store`.

**Description:** 
This method sets the `value` to the provided `key` in the `store`.




 


### Examples

The API is decoupled in different `design patterns` and similar `utilities` under the API object.

To see more of each example, take a look to the `test` folder. Tests are written using `mocha` and `chai`.

# Commands

The commands of the project are the `npm` commands listed at `package.json#scripts`.

# License

MIT License.

# Conclusions

Soon, more.







