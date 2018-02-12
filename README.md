# deep-update-object
object-deep-update is a zero-dependency module that let's you update any value at any position of a structure of nested objects. It returns a new object and does NOT MUTATE the original object.

```js
deepUpdateObject(object, path, callback)
```
### Arguments
__object:__ The object you want to use as source for the update.

__path:__ Array of property names that lead to the value to update.

__callback:__ Function you want to perform on the value in __path__. 

### Returns
__new Object__: if path is a valid set of properties.
__false__: if path is not a valid set of properties.

## Use
### Terminal
```
npm i deep-update-object --save
```

### In your project
```js
const deepUpdateObject = require('deep-update-object');

const object_1 = {a: 1, b: {c: 3, d: { e: 5}}};
const object_2 = deepUpdateObject(object_1, ['b','d','e'], val => val + 5);

// object_1 = {a: 1, b: {c: 3, d: { e: 5}}}
// object_2 = {a: 1, b: {c: 3, d: { e: 10}}}

// Returns false when called with wrong path
const object_3 = deepUpdateObject(object_1, ['x','y','z'], val => val + 5);
// object_1 = {a: 1, b: {c: 3, d: { e: 5}}};
// object_3 = false
```

