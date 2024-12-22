//Basic types
let id: number = 5;
let company: string = 'Code Tamizha Code';
let isCompanyOpen: boolean = true;
let x:any;

let ids: number[] = [1,2,3,4,5,6]
let x1: any[] = [1,'d', true]

//Tuple
let employee: [number, string, boolean] = [1, 'Iyyappan', true]
//Tuple array
let employees: [number, string, boolean][] = [
    [1, 'Iyyappan', true],
    [2, 'Coder', false],
    [3, 'Tamizha', true],
]

// 1. Basic Types

// Primitive Types:

let isDone: boolean = false;
let age: number = 42;
let name: string = "John";
let anything: any = 123; // Avoid using 'any' unless necessary
let nullable: string | null = null;

// Arrays and Tuples:

let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let tuple: [number, string] = [1, "One"];

//Enums:

enum Direction {
  North,
  South,
  East,
  West,
}
let dir: Direction = Direction.North;

//union
let eid: string | number;

eid = 5
eid = 'roll1'

//enum
enum direction1 {
    up = 5,
    down,
    left,
    right
}

enum direction2 {
    up = 'up',
    down = 'down',
    left = 'leftddrgd',
    right = 'right'
}

// console.log(direction2.left)

//object

type userType = {
    id: number,
    name: string
}

let User: userType = {
    id: 1,
    name: 'Iyyappan'
}

//type assert
let x3: any = 5
// let compId = x3 as number;
let compId = <number>x3;

//function

function doMath(a: number,b: number): number {
    return a+b
}

function logme(x: string | number): void {
    if(typeof x === 'number') console.log('Hi Number')
    if(typeof x === 'string') console.log('Hi String')
}

// logme('5')

//interface

type eid1 = number | string

interface userType1 {
    id: number,
    name: string,
    age?: number
}

let User1: userType1 = {
    id: 1,
    name: 'Iyyappan'
}

// User1.id = 5

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number) => x+y
const sub: MathFunc = (x: number, y: number) => x-y

interface PersonType {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonType {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is registered now`
    }
}

const iyy = new Person(1, 'Iyyappan')
const iyy1 = new Person(2, 'Code')
const iyy2 = new Person(3, 'Tamozha')

// console.log(iyy.register())

// child class
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp1 = new Employee(5, 'Ramesh', 'Developer')

console.log(emp1.register())

//Generics
function getArray<T>(items: T[]):T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['a', 'b'])

numArray.push(1)
strArray.push('sdff')




// Functions
// Typed Parameters and Return Values:

function add(a: number, b: number): number {
  return a + b;
}


// Optional and Default Parameters:

function greet(name: string = "Guest", age?: number): string {
  return `Hello, ${name}!`;
}


// Void and Never:

function logMessage(message: string): void {
  console.log(message);
}

function throwError(error: string): never {
  throw new Error(error);
}

// Interfaces and Types
// Defining Interfaces:

interface Person {
  name: string;
  age: number;
  greet(): string;
}

let person: Person = {
  name: "Alice",
  age: 30,
  greet: () => "Hello",
};

// Extending Interfaces:

interface Employee extends Person {
  employeeId: number;
}

let emp: Employee = {
  name: "Bob",
  age: 25,
  employeeId: 101,
  greet: () => "Hi",
};

// Using Type Aliases:

type ID = string | number;

function printId(id: ID) {
  console.log(id);
}

// Classes
// Basic Classes:

class Animal {
  constructor(public name: string) {}
  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}


//Inheritance:

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

let dog = new Dog("Buddy");
dog.bark();
dog.move(10);

// Abstract Classes:

abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
// Generics

function identity<T>(arg: T): T {
  return arg;
}
let result = identity<number>(42);

// Generic Classes:

class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}


//Generic Constraints:

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
// Utility Types
// Common Utility Types:
// Partial<T>: Makes all properties optional.
// Readonly<T>: Makes all properties read-only.
// Pick<T, K>: Select specific properties.
// Omit<T, K>: Remove specific properties.


interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type ReadOnlyUser = Readonly<User>;

// Advanced Types
// Union and Intersection Types:

type Admin = { isAdmin: boolean };
type Member = { isMember: boolean };

type User = Admin | Member; // Union
type FullUser = Admin & Member; // Intersection

// Type Guards:

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printValue(value: string | number): void {
  if (isString(value)) {
    console.log("String: ", value);
  } else {
    console.log("Number: ", value);
  }
}
// Modules
// Import and Export:

// math.ts
export function add1(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add1 } from "./math";
console.log(add(2, 3));

// Type Assertions
// Using as and <Type>:

let someValue: unknown = "Hello";
let strLength: number = (someValue as string).length;

// Decorators (Experimental)

function Log(target: any, propertyKey: string) {
  console.log(`Property ${propertyKey} decorated.`);
}

class Example {
  @Log
  someProperty: string = "value";
}
// Handling Errors
// Null and Undefined Checks:

let value: string | null = null;
if (value) {
  console.log(value.length);
}

// Configuring TypeScript
// Key tsconfig.json Options:

{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}