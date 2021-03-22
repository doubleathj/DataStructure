'use strict'

// Linear Search (선형 탐색) O(n)
const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const linearSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === n) {
      return true;
      }
  }
  return false;
}

const otherLinearSearch = (arr, n) => {
  for (let target of arr) {
    if (target === n) {
      return true;
    }
  }
  return false;
} 


// binary Search (이신 탐색) O(log n)
const binarySearch = (arr, n) => {
  let lowIdx = 0;
  let highIdx = arr.length - 1;    
  
  while (lowIdx <= highIdx) {        
    let midIdx = Math.floor((lowIdx + highIdx) / 2);
    if (arr[midIdx] === n) {
      return midIdx;
    } else if (arr[midIdx] > n) {
      highIdx = midIdx - 1
    } else {
      lowIdx = midIdx + 1
    }
  }
  return -1;
}

