var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array1 = new Array();

var array2 = new Array();

function addElementToBeginningOfArray(array1, newElement) {
  array1 = [newElement, ...array1]
  return array1
}

function destructivelyAddElementToBeginningOfArray(array2, newElement) {
  array2.unshift(newElement)
  return array2
}

function addElementToEndOfArray(array1, newElement) {
  var array1 = [...array1, newElement]
  return array1
}

function destructivelyAddElementToEndOfArray(array2, newElement) {
  array2.push(newElement)
  return array2
}

function accessElementInArray(array1, indexNumber) {
  return array1[indexNumber]
}

function destructivelyRemoveElementFromBeginningOfArray(array1) {
  array1.shift()
  return array1
}

function removeElementFromEndOfArray(array2) {
  array2 = array2.slice(1)
}
