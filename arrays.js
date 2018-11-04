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