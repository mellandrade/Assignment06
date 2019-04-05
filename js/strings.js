/*eslint-env browser*/

//STEP 1
/*
var name = prompt("What is your name?");
window.alert("There are " + (name.length) + " characters in your name.");
*/

//STEP 2
/*
var name = prompt("What is your name?");
var num = prompt("Select a number.");
window.alert(name.charAt(0));
*/

//STEP 3
/*
var fname = prompt("What is your first name?");
var lname = prompt("What is your last name?");
window.alert("Your name is: " + (fname.concat(lname)));
*/

//STEP 4
/*
var fox = "The quick brown fox jumps over the lazy dog.";
window.alert(fox.indexOf("fox"));
*/

//STEP 5
/*
var fox = "The quick brown fox jumps over the lazy fox.";
window.alert(fox.lastIndexOf("fox"));
*/

//STEP 6
/*
var dog = "The quick brown fox jumped over the lazy dog.";
var fullname = prompt("What is your full name?");
var name = fullname;
window.alert(dog.replace("the lazy dog", name));
*/

//STEP 7
/*
var dog = "The quick brown fox jumps over the lazy dog.";
var word = prompt("Enter a word from 'The quick brown fox jumps over the lazy dog.'");
var find = word;
window.alert(dog.search(find));
*/

//STEP 8
/*
var old_string = "The quick brown fox jumps over the lazy dog.";
var new_string = (old_string.slice(-13, -1));
window.alert(new_string.toUpperCase());
*/

//STEP 9
/*
var dog = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.          ";
var noSpace = (dog.trim());
window.alert(noSpace.toLowerCase());
*/

//STEP 10
/*
var dog = "the quick brown fox jumps over the lazy dog.";
var capFirst = dog.charAt(0).toUpperCase() + name.slice(1);
window.alert(dog.replace("t", capFirst));
*/
