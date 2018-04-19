Array.prototype.uniq = function uniq (arr){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function twoSum(arr){
  // iterate through array i = 0 j = 1 , if sums to 0 add it to the result, array within array

  let result = [];
  for (let i = 0; i < arr.length-1; i++){
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function transpose(arr){
  let result = new Array(arr[0].length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = new Array(arr.length);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        result[i][j] = arr[j][i];
        result[j][i] = arr[i][j];
    }
  }
  return result;
};
