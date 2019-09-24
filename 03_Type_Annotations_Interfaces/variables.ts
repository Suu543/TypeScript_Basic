// Type-Annotation
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Object Literal Annotations
// Array
let colors: string[] = ['red', 'green', 'blue'];
// colors = [1]; Error
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
// (i: number) => void: there is nothing to return
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = `{"x":10, "y": 20}`;
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y : 20};


// 2) When we declare a variable on one line - Delayed Initialization
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// The above foundWord causes Delayed Initialization. To solve this problem,
// we at least should specify default value like this
let wordss = ['red', 'green', 'blue'];
let foundedWord: boolean = false;

for (let i = 0; i < words.length; i++) {
    if (wordss[i] === 'green') {
        foundedWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    numberAboveZero = numbers[i];
}