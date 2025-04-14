'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA < strB) {
        return -1;
      }

      if (strA > strB) {
        return 1;
      }

      return 0;
    };

    const comparer = compareFunction || defaultCompare;

    const mergeSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }

      const middle = Math.floor(arr.length / 2);
      const left = [];
      const right = [];

      for (let i = 0; i < middle; i++) {
        left[left.length] = arr[i];
      }

      for (let i = middle; i < arr.length; i++) {
        right[right.length] = arr[i];
      }

      return merge(mergeSort(left), mergeSort(right));
    };

    const merge = (left, right) => {
      const result = [];
      let i = 0;
      let j = 0;

      while (i < left.length && j < right.length) {
        if (comparer(left[i], right[j]) <= 0) {
          result[result.length] = left[i];
          i++;
        } else {
          result[result.length] = right[j];
          j++;
        }
      }

      while (i < left.length) {
        result[result.length] = left[i];
        i++;
      }

      while (j < right.length) {
        result[result.length] = right[j];
        j++;
      }

      return result;
    };

    const sorted = mergeSort(this);

    for (let i = 0; i < sorted.length; i++) {
      this[i] = sorted[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
