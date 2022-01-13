- [Library Patterns](#library-patterns)
  - [Object-Utility Pattern](#object-utility-pattern)
  - [Revealing Module Pattern](#revealing-module-pattern)
  - [Constructor Pattern](#constructor-pattern)

# Library Patterns 

## Object-Utility Pattern

```js
let weight = {
  add: function(weight, amount) {
    return weight + amount;
  },

  subtract: function(weight, amount) {
    return weight - amount;
  },

  format: function(weight, amount) {
    return weight.toLocaleString(undefined, {
      style: 'unit',
      unit: units
    });
  }
};
```

## Revealing Module Pattern

## Constructor Pattern