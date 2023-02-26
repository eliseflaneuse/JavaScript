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
3. Avoid Mutations and Side Effects Using Functional Programming
4. Pass Arguments to Avoid External Dependence in a Function
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

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

// 3. Avoid Mutations and Side Effects Using Functional Programming
/* 
Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. 
A function, ideally, should be a pure function, meaning that it does not cause any side effects.
*/

// The global variable
let fixedValue = 4;

function incrementer() {
  let newValue = fixedValue + 1;
  return newValue; // If we wrote return fixedValue += 1 we would be changing the global variable, thus causing a mutation.
}

// 4. Pass Arguments to Avoid External Dependence in a Function
/* 
As you could´ve notive in step number 3 we were closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

Another principle of functional programming is to always declare your dependencies explicitly. 
This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
*/

// So this version of incrementer is better, because the function clearly declare its dependencies.

function incrementer2(arg) {
   let newValue = arg + 1;
   return newValue; 
}
