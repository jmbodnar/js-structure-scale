# Working with ES Modules

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
