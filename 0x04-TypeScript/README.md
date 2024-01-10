# TypeScript

This guide goes through the fundamental concepts and advanced features of TypeScript.

## Table of Contents
1. [Introduction to TypeScript](#introduction-to-typescript)
2. [Basic Types in TypeScript](#basic-types-in-typescript)
3. [Interfaces, Classes, and Functions](#interfaces-classes-and-functions)
4. [Working with the DOM and TypeScript](#working-with-the-dom-and-typescript)
5. [Generic Types](#generic-types)
6. [Using Namespaces](#using-namespaces)
7. [Merging Declarations](#merging-declarations)
8. [Using Ambient Namespace to Import an External Library](#using-ambient-namespace-to-import-an-external-library)
9. [Basic Nominal Typing with TypeScript](#basic-nominal-typing-with-typescript)
10. [Advanced Topics](#advanced-topics)

## Introduction to TypeScript

TypeScript is a superset of JavaScript that adds static types to the language. It provides benefits like improved tooling, better code organization, and enhanced collaboration. TypeScript code is ultimately compiled to JavaScript, allowing it to run on any JavaScript runtime.

To get started, you'll need to install TypeScript globally:

```bash
npm install -g typescript
```

After installation, you can create a TypeScript file (e.g., `app.ts`) and compile it using the `tsc` command:

```bash
tsc app.ts
```

This will generate a corresponding JavaScript file (`app.js`) that you can run in your preferred environment.

## Basic Types in TypeScript

In TypeScript, you can explicitly specify variable types. Here are some basic types:

- `number`: Represents numeric values.
- `string`: Represents textual data.
- `boolean`: Represents true or false values.
- `array`: Represents an array of values.
- `tuple`: Represents an array with a fixed number of elements with different types.

```typescript
let num: number = 42;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;
let numArray: number[] = [1, 2, 3];
let tuple: [string, number] = ["TypeScript", 2022];
```

## Interfaces, Classes, and Functions

### Interfaces

Interfaces define contracts for object shapes in TypeScript:

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 25 };
```

### Classes

Classes allow you to create blueprints for objects with methods and properties:

```typescript
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  startEngine(): void {
    console.log(`${this.brand} engine started`);
  }
}

const myCar = new Car("Toyota");
myCar.startEngine();
```

### Functions

Functions can have explicit parameter and return types:

```typescript
function add(x: number, y: number): number {
  return x + y;
}

const result = add(3, 7);
```

## Working with the DOM and TypeScript

TypeScript can be used to interact with the Document Object Model (DOM) in a type-safe manner:

```typescript
const element = document.getElementById("myElement") as HTMLInputElement;
element.value = "TypeScript DOM Interaction";
```

## Generic Types

Generics allow you to write reusable and type-safe code:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const strIdentity = identity<string>("Hello");
const numIdentity = identity<number>(42);
```

## Using Namespaces

Namespaces help organize code into logical units:

```typescript
namespace MathOperations {
  export function add(x: number, y: number): number {
    return x + y;
  }
}

const sum = MathOperations.add(3, 4);
```

## Merging Declarations

TypeScript allows merging declarations for certain entities, such as interfaces:

```typescript
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const myCar: Car = { brand: "Toyota", model: "Camry" };
```

## Using Ambient Namespace to Import an External Library

You can use ambient namespaces to import external libraries without TypeScript complaining about their absence at compile time:

```typescript
declare namespace MyLibrary {
  function greet(name: string): void;
}

MyLibrary.greet("John");
```

## Basic Nominal Typing with TypeScript

TypeScript doesn't support nominal typing directly, but you can achieve it using a workaround:

```typescript
type Brand<T, U> = T & { __brand: U };

interface Name {
  __brand: "Name";
}

function createName(value: string): Brand<string, Name> {
  return value as Brand<string, Name>;
}

const myName = createName("John");
```
---

# Advanced Topics

### 1. Decorators

Decorators are a powerful feature in TypeScript, allowing you to modify or extend classes and properties. They are commonly used in frameworks like Angular.

```typescript
function log(target: any, key: string) {
  console.log(`Method ${key} is invoked`);
}

class Example {
  @log
  greet() {
    console.log("Hello, TypeScript!");
  }
}

const instance = new Example();
instance.greet(); // This will log both "Method greet is invoked" and "Hello, TypeScript!"
```

### 2. Async/Await

TypeScript supports asynchronous programming using `async` and `await`. This makes it easier to work with asynchronous code, such as API calls.

```typescript
async function fetchData(): Promise<string> {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data.message;
}

fetchData().then(message => console.log(message));
```

### 3. Enums

Enums provide a way to define a set of named numeric constants. They can improve code readability and maintainability.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;
console.log(myColor); // Output: 1 (index of Green in the enum)
```

### 4. Type Assertions

Type assertions are a way to tell the compiler that you know more about a value's type than it does.

```typescript
let value: any = "Hello, TypeScript!";
let length: number = (value as string).length;
console.log(length); // Output: 18
```

### 5. Intersection and Union Types

Intersection types combine multiple types into one, and union types allow a value to have one of multiple types.

```typescript
type Car = {
  brand: string;
};

type ElectricCar = {
  batteryLife: number;
};

type ElectricSportsCar = Car & ElectricCar;

const myCar: ElectricSportsCar = {
  brand: "Tesla",
  batteryLife: 300,
};
```

### 6. Type Guards

Type guards help you narrow down the type of a variable within a block of code, improving type inference.

```typescript
function processInput(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

### 7. Module Systems

TypeScript supports various module systems, including CommonJS, AMD, and ES6 modules.

```typescript
// Importing a module
import { myFunction } from './myModule';

// Exporting a module
export function myFunction() {
  // Function implementation
}
```
---
