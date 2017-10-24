// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each

  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  const resultArray = [];
  // for (let i = 0; i < elements.length; i++) {
  //   resultArray.push(cb(elements[i]));
  //  THIS IS THE for loop version (above)
  //
  // THIS IS THE forEach version (below)
  each(elements, (elem) => {
    resultArray.push(cb(elem));
  });
  return resultArray;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  //
  // for(let i = 0; i < elements.length; i++){
  let i = 0;
  if (memo === undefined) {
    memo = elements[0];
    i = 1;
  }
  for (; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  each(elements, (elem) => {
    if (cb[elem] === true) {
      return true;
    }
  });
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const result = [];
  each(elements, (elem) => {
    if (Array.isArray(elem)) {
      const nestedArray = elem;
      each(nestedArray, (nestedElem) => {
        result.push(nestedElem);
      });
    } else {
      result.push(elem);
    }
  });
  return result;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
