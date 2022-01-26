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

  return Constrructor;
})();
```
