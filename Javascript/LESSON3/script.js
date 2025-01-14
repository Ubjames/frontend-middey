
//function declarations: named function
function myGreet() {
    console.log('Hello, World! from myGreet function');
}


//calling or ivoking the function
// myGreet();

//function expression: anonymous function
let myGreeting = function () {
    console.log('Hello, World! from myGreeting function');
}

// myGreeting();

//Arrow function
let myGreetingArrowFunc = () => {
    console.log("My arrow function runs...");
}
    

// myGreetingArrowFunc();

//IIFE - Immediately Invoked Function Expression
// (function () {
//     console.log('my IIFE runs...');
// })();


//function with parameters

function greetMe(name='World', age=18) {
    console.log("My name is " + name + " and I'm " + age +" years old");
}
// greetMe('Mike Smith', 70);

function sum(a,b, c) {
    console.log(a+b*c);
}

sum(20,40,34);






