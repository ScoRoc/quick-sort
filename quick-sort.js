
let quickSort = array => {
  let lesser = [];
  let equal = [];
  let greater = [];

  if (array.length < 2) {
    return array;
  }

  for (let i of array) {
    let pivot = array[0];
    if (i < pivot) {
      lesser.push(i);
    }
    if (i === pivot) {
      equal.push(i);
    }
    if (i > pivot) {
      greater.push(i);
    }
  }

  return [...quickSort(lesser),...equal,...quickSort(greater)];

};


let myArray = [7, 77, 31, 31, 85, 92, 13, 21, 68, 59, 21, 15, 69, 69, 100, 52, 43, 92, 79, 40, 50, 20, 48, 17, 98, 73, 70, 77, 7, 24, 16, 36, 29, 55, 100, 37, 98, 5, 95, 17, 1, 80, 7, 46, 3, 41, 23, 31, 56, 80, 89, 27, 77, 96, 82, 60, 92, 80, 1, 37, 19, 15, 19, 35, 30, 17, 58, 50, 45, 38, 78, 87, 89, 22, 83, 92, 65, 23, 67, 77, 63, 53, 8, 35, 59, 40, 64, 47, 36, 34, 15, 97, 31, 77, 52, 58, 44, 20, 62, 67];

console.log(quickSort(myArray));
