---

# ES6 Data Manipulation

This repository covers various data manipulation techniques in ES6, focusing on Arrays, Typed Arrays, and Set/Map data structures.

## Arrays

### 1. Using `map`, `filter`, and `reduce`

#### `map`: Transforming Array Elements

The `map` function applies a provided function to each element of the array and returns a new array of the results.

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

#### `filter`: Filtering Array Elements

The `filter` function creates a new array with elements that pass a provided test.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

#### `reduce`: Reducing Array to Single Value

The `reduce` function executes a reducer function on each element, resulting in a single output value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15
```

### 2. Typed Arrays

Typed Arrays provide a way to work with binary data in a more controlled manner.

```javascript
const buffer = new ArrayBuffer(16);
const int32Array = new Int32Array(buffer);

int32Array[0] = 42;
int32Array[1] = 23;

console.log(int32Array); // Int32Array [42, 23]
```

## Set, Map, and WeakMap

### 1. Set Data Structure

The `Set` object allows you to store unique values.

```javascript
const uniqueNumbers = new Set([1, 2, 3, 1, 2]);
console.log(uniqueNumbers); // Set {1, 2, 3}
```

### 2. Map Data Structure

The `Map` object holds key-value pairs.

```javascript
const userRoles = new Map();

userRoles.set('John', 'Admin');
userRoles.set('Jane', 'User');

console.log(userRoles.get('John')); // Admin
```

### 3. WeakMap

`WeakMap` is a collection of key/value pairs where the keys are objects and the values can be arbitrary values.

```javascript
const weakMap = new WeakMap();
const obj = {};

weakMap.set(obj, 'some data');

console.log(weakMap.get(obj)); // some data
```
