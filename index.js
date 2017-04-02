
function doinIt(element, index) {
  console.log(`${index}: ${element}`)
}

function iterativeLog(array) {
  array.forEach(doinIt)
}

function iterate(callback) {
  cats = ["black", "brown", "tan"]
  cats.forEach(callback)
  return cats
}

function doToArray(array, callback) {
  array.forEach(callback)
}
