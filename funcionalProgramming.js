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
5. Refactor Global Variables Out of Functions
6.Use the map Method to Extract Data from an Array
7. Implement map on a Prototype

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

// 5. Refactor Global Variables Out of Functions

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(array, arg) {
  let newArray = [...array];
  newArray.push(arg);
  return newArray;
}

function remove(array, arg) {
  let newArray = [...array];
  if (newArray.indexOf(arg) >= 0) {
    newArray.splice(newArray.indexOf(arg), 1); 
    return newArray; 
    }
}
console.log(add(bookList, "Harry Potter and Philosopher Stone")); // creates a new array adding the argument
console.log(bookList); // the bookList variable was not mutated

// 6.Use the map Method to Extract Data from an Array

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); 

// 7. Implement map on a Prototype

Array.prototype.myMap = function(callback) {
    const newArray = [];
      this.forEach((element, index, originalArr) =>
      newArray.push(callback(element, index, originalArr))
    );
    return newArray;
  };

// 8. Use the filter Method to Extract Data from an Array - Array.prototype.filter()

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersUnder30 = users.filter(user => user.age < 30);
  console.log(usersUnder30); 

// 9. Implement the filter Method on a Prototype

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (Boolean(callback(this[i], i, this)) === true) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };

// 10. Return Part of an Array Using the slice Method

function sliceArray(anim, beginSlice, endSlice) {
    let newArray = anim.slice(beginSlice, endSlice);
    return newArray;
  }
  
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// 11. Remove Elements from an Array Using slice Instead of splice (splice is a mutating method as slice is not)

function nonMutatingSplice(cities) {
    let threeCities = cities.slice(0, 3);
    return threeCities;
      }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);

// 12. Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
    let newArray = original.concat(attach);
    return newArray;
  }
  
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

let arr2 = first.concat(second);
console.log(arr2);

// 13. Use the reduce Method to Analyze Data

/* Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. 
You can solve almost any array processing problem using the reduce method.*/

/* reduce((accumulator, currentValue, currentIndex, array) => 

accumulator
The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

currentValue
The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

currentIndex
The index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

array
The array reduce() was called upon.
*/

const cats = [
    { name: 'Momo', age: 12 },
    { name: 'Thor', age: 13 },
    { name: 'Milla', age: 5 }
  ];
  
  const sumOfAges = cats.reduce((sum, user) => sum + user.age, 0);
  console.log(sumOfAges);

  // The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  function getRating(watchList) {
    let rating = watchList
    .filter(movie => movie.Director == "Christopher Nolan")
    .map(movie => movie.imdbRating);
    console.log(rating);
    let average = rating.reduce((x, y) => {
        return x + y;
      }, 0);
    let averageRating = average / rating.length;
    // Only change code above this line
    return averageRating;
  }
  
  console.log(getRating(watchList));
  const averageRating = watchList
  // Use filter to find films directed by Christopher Nolan
  .filter(film => film.Director === "Christopher Nolan")
  // Use map to convert their ratings from strings to numbers
  .map(film => Number(film.imdbRating))
  // Use reduce to add together their ratings
  .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
// Divide by the number of Nolan films to get the average rating
watchList.filter(film => film.Director === "Christopher Nolan").length;

console.log(averageRating);

// 14. Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
    const validNumbers = arr
    .filter(Number.isInteger) // Is there how to use && or put two conditionals inside filter?
    .filter(num => num > -1)
    .map(num => num * num);
    return validNumbers;
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

// 15. Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {  
    return arr.sort()
  }
  
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// 16. Return a Sorted Array Without Changing the Original Array

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArr= arr.slice();
  return newArr.sort((a, b) => a - b) 
  /* The function above works because of the values below
  compareFn(a, b) 
  return value	    sort order
  > 0	            sort a after b
  < 0	            sort a before b
  === 0	            keep original order of a and b
  */
}

nonMutatingSort(globalArray);

// 17. Split a String into an Array Using the split Method

const einstein = "Play is the highest form of research.";

const words = einstein.split(" "); // space 
console.log(words);
const letters = einstein.split(""); // no space
console.log(letters);

function splitify(str) {
      return str.split(/\W/) /*
      The split method accepts one argument – a breakpoint. This breakpoint determines the points at which the splitting should occur. 
      In this case the string breaks at any time that encounters a non-word*/
  
  }
  
console.log(splitify("Hello World,I-am code"));

// Here is another exxample 

const string = "How is $everything g$oing?";

const breakpoint = /\$e|\$o/; // The regex pattern matches the dollar sign followed by the letter "e" ($e) or the dollar sign followed by the letter o ($o).

const splitted = string.split(breakpoint);

console.log(splitted);

// 18.Combine an Array into a String Using the join Method

const hi = ["Hello", "World"];
const str = hi.join(" ");
console.log(str);
const comma = hi.join(","); // It takes an argument for the delimiter that is used to separate the array elements in the string.
console.log(comma);

function sentensify(str) {
    let newStr = str.split(/\W/);
    let joinStr = newStr.join(" ");
    return joinStr
  }
console.log(sentensify("May-the-force-be-with-you"));

// 19. Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
    return title
    .toLowerCase()
    .trim()
    .split(/\s+/) // \s	- Find a whitespace character and n+ matches any string that contains at least one n
    .join("-");
}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

// 20. Use the every Method to Check that Every Element in an Array Meets a Criteria

const numbers = [1, 5, 8, 0, 10, 11];

console.log(numbers.every(function(currentValue) {currentValue < 10;}));

function checkPositive(arr) {
    return arr.every(function(value) {return value > 0;})
    }
  
console.log(checkPositive([1, 2, 3, 4, 5]));

// 21. Use the some Method to Check that Any Elements in an Array Meet a Criteria

const num = [10, 50, 8, 220, 110, 11];

num.some(function(currentValue) {
  return currentValue < 10;
});
