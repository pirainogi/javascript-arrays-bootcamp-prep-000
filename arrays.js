var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; 
var chocString = "foo";

function addElementToBeginningOfArray(chocolateBars, chocString){
  return [chocString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocString){
  chocolateBars.unshift(chocString);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, chocString){
  return [...chocolateBars, chocString];
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocString){
  chocolateBars.push(chocString); 
  return chocolateBars;
}

function accessElementInArray(chocolateBars, "kitkat"){
  return chocolateBars[3];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1)
}