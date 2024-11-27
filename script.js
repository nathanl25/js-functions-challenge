// What are functions?
// Blocks of code that perform a certain task
// We use them to avoid repetition of code

const student = "Jack";
const student2 = "Kate";
const student3 = "Jenny";

console.log("Hi, my name is " + student);
console.log("Hi, my name is " + student2);
console.log("Hi, my name is " + student3);

function introduceYourself(firstName) {
    // function body
    // this is the code that will run every time I call this function
    const introduction = `Hi, my name is ${firstName}`;
    return introduction;
}

console.log(introduceYourself("Martyna"));
const intro = introduceYourself(student);
console.log(intro);

// rectangle perim

function rectanglePerim(height, width) {
    return (height + width) * 2;
}
console.log(rectanglePerim(10, 12));
const a = 34;
const b = 19;
console.log(rectanglePerim(a, b));

function getFullName(firstName, lastName) {
    console.log("Hi");
    return `${firstName} ${lastName}`;
}

console.log(getFullName("Martyna", "Krol"));
console.log(getFullName("krol", "martyna"));

// parameters are great because they are what makes functions reusable

// function with no parameters

function getCurrentDate() {
    return new Date();
}
console.log(getCurrentDate());
let x = false;
let num = 1;

printSomething();
function printSomething() {
    console.log("something");
    if (num > 0) {
        x = true;
    }
}
// const fromSomething = printSomething();
// console.log(fromSomething);

// arrow function

//console.log(sum(2, 3));
const sum = (num1, num2) => {
    return num1 + num2;
    // return means we stop the execution of that function, this log will never happen
    console.log("hello");
};

console.log(sum(1, 1));

const calculator = (num1, num2, op) => {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "error";
    }
};

console.log(calculator(2, 2, "+"));
console.log(calculator(12, 2, "/"));

// Pure functions - homework
