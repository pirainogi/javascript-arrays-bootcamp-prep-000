var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; 
var chocString = "foo";

function addElementToBeginningOfArray(chocolateBars, chocString){
  return [chocString, ...chocolateBars];
}
