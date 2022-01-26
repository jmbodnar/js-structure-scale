# Monday

You have options with exports/imports. For example, you can export/import
specific items from/to your modules.

```js
export { itemA, itemB, itemC };
import { itemA, itemB } from "path/to/module-file.js";
```

You can export/import a single, named default.

```js
export default itemA;
import itemA from "path/to/module-file.js";
```

Or you can export/import a named default along with other items.

```js
export { itemA as default, itemB, itemC };
import itemA from "path/to/module-file.js";
import { itemB } from "path/to/module-file.js";
import itemA, { itemB, itemC } from "path/to/module-file.js";
```

# Wednesday

By convention, properties prefixed with an underscore are intended to be
read-only, internal use properties. But the underscore offers no protection
itself.

One method of setting internal/read only properties is to use the
Object.defineProperties() method to create read-only properties in conjunction
with the Object.freze() method for object properties.

```js
const Weight = (function () {
  function Constructor(weight, options = {}) {
    // Overwrite default settings with user-provided options
    const settings = Object.assign(
      {
        unit: "pounds",
      },
      options
    );

    // Prevent modification of settings
    Object.freeze(settings);

    // Set read-only/writeable _settings properties
    Object.defineProperties(this, {
      weight: {
        value: weight,
        writeable: true,
      },
      _settings: { value: settings },
    });
  }

  // ...

  return Constructor;
})();
```

Sometimes you want a library to be immutable. One option is to return a new instance
with each update to your property you want to remain. In our exmaple weight library
this might mean returning a new instance with each call to the library's add() or
subtract methods. For example, ...

```js
let Weight = (function () {
  /**
   * The Constructor object
   * @param {Number} weight  The starting weight
   * @param {Object} options Settings and options for this instance
   */
  function Constructor(weight, options = {}) {
    // Combine user options and default settings
    let settings = Object.assign(
      {
        units: "pound",
      },
      options
    );

    // Freeze settings so that they cannot be modified
    Object.freeze(settings);

    // Define instance properties
    Object.defineProperties(this, {
      weight: { value: weight },
      _settings: { value: settings },
    });
  }

  /**
   * Add an amount to a weight
   * @param {Number} amount The amount to add
   */
  Constructor.prototype.add = function (amount) {
    let weight = this.weight + amount;
    return new Constructor(weight, this._settings);
  };

  /**
   * Subtract an amount from a weight
   * @param {Number} amount The amount to subtract
   */
  Constructor.prototype.subtract = function (amount) {
    let weight = this.weight - amount;
    return new Constructor(weight, this._settings);
  };

  /**
   * Format a weight to a string
   * @param  {String} units  The weight units to use
   * @return {String}        The formatted weight
   */
  Constructor.prototype.format = function (units) {
    return this.weight.toLocaleString(undefined, {
      style: "unit",
      unit: units ? units : this._settings.units,
    });
  };

  // Export the constructor object
  return Constructor;
})();

let monday = new Weight(100);
let wednesday = monday.add(10);
```

Project Notes/Instructions

Modify the date library to support developer options and immutable instances.
Allow users to pass options to change the text returned from the getWeekday(),
getMonth(), and related methods. Users can pass options to set the locales,
dateStyle, timeStyle, weekday, and month values. They are set in the settings and
allowed in the individual functions if desired.

References:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
- https://tc39.es/ecma402/#sec-intl-datetimeformat-constructor
- https://www.w3schools.com/tags/ref_language_codes.asp
