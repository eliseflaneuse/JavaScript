/* 
Functional programming is a style of programming where solutions are simple, isolated functions, 
without any side effects outside of the function scope:
 INPUT -> PROCESS -> OUTPUT

Functional programming is about:

Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

Pure functions - the same input always gives the same output

Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled.*/

/* A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function. 
Let's see what makes a function pure in detail:

1. The return value of the function on the function call should only be dependent on the input function arguments.

2. It should not modify any non-local state. 
It means the function should not manipulate anything other than the data stored in the local variables declared within the function.

3. The function should not have any side effects, such as reassigning non-local variables, 
mutating the state of any part of code that is not inside the function, or calling any non-pure functions inside it.
A function that follows all the above conditions is a pure function in javascript.*/

/*
Syllabus:
1. Understand Functional Programming Terminology
2. Understand the Hazards of Using Imperative Code
*/






// 1. Understand Functional Programming Terminology

/* Callbacks Functions:
Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. 
You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.
*/

/* First Class Functions:
Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, 
are called first class functions. In JavaScript, all functions are first class functions.*/

/* Higher Order Functions: 
The functions that take a function as an argument, or return a function as a return value, are called higher order functions.*/


// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// 2. Understand the Hazards of Using Imperative Code
