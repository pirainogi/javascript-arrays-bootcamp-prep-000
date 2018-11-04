var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; 
var chocString = "foo";

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(chocolateBars, chocString){
  return [...chocolateBars, chocString];
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocString){
  chocolateBars.push(chocString); 
  return chocolateBars;
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

function accessElementInArray(array, index) {
  return array[index] 
}