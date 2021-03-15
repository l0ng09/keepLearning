/**
 * @param input
 * @param size
 * @returns {Array}
 */
//  _.chunk(['a', 'b', 'c', 'd'], 2)
//  // => [['a', 'b'], ['c', 'd']]

//  _.chunk(['a', 'b', 'c', 'd'], 3)
//  // => [['a', 'b', 'c'], ['d']]

//  _.chunk(['a', 'b', 'c', 'd'], 5)
//  // => [['a', 'b', 'c', 'd']]

//  _.chunk(['a', 'b', 'c', 'd'], 0)
//  // => []

function chunk(arr, num) {
  if (num === 0) return [];
  if (Array.isArray(arr) && typeof num === "number") {
    let result = [];
    let i = 0;
    while (i < arr.length) {
      result.push(arr.slice(i, i + num));
      i += num;
    }
    return result;
  } else {
    console.log("params type error");
  }
}

chunk(["a", "b", "c", "d"], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(["a", "b", "c", "d"], 3);
// => [['a', 'b', 'c'], ['d']]

chunk(["a", "b", "c", "d"], 5);
// => [['a', 'b', 'c', 'd']]

chunk(["a", "b", "c", "d"], 0);
// => []
