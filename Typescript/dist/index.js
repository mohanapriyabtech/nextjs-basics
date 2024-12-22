"use strict";
//Basic types
let id = 5;
let company = 'Code Tamizha Code';
let isCompanyOpen = true;
let x;
let ids = [1, 2, 3, 4, 5, 6];
let x1 = [1, 'd', true];
//Tuple
let employee = [1, 'Iyyappan', true];
//Tuple array
let employees = [
    [1, 'Iyyappan', true],
    [2, 'Coder', false],
    [3, 'Tamizha', true],
];
//union
let eid;
eid = 5;
eid = 'roll1';
//enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 5] = "up";
    direction1[direction1["down"] = 6] = "down";
    direction1[direction1["left"] = 7] = "left";
    direction1[direction1["right"] = 8] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "leftddrgd";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
let User = {
    id: 1,
    name: 'Iyyappan'
};
//type assert
let x3 = 5;
// let compId = x3 as number;
let compId = x3;
//function
function doMath(a, b) {
    return a + b;
}
function logme(x) {
    if (typeof x === 'number')
        console.log('Hi Number');
    if (typeof x === 'string')
        console.log('Hi String');
}
let User1 = {
    id: 1,
    name: 'Iyyappan'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered now`;
    }
}
const iyy = new Person(1, 'Iyyappan');
const iyy1 = new Person(2, 'Code');
const iyy2 = new Person(3, 'Tamozha');
// console.log(iyy.register())
// child class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(5, 'Ramesh', 'Developer');
console.log(emp1.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['a', 'b']);
numArray.push(1);
strArray.push('sdff');
