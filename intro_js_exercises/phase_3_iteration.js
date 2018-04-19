Array.prototype.bubble_sort = function bubble_sort(arr) {
  // until sorted
    for (var i = 0; i < arr.length-1; i++) {
      for (var j = i+1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          bool = false;
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
  return arr;
};

String.prototype.substrings = function substrings(){
  let result = [];
  for (var i = 0; i < this.length-1; i++) {
    for (var j = i+1; j < this.length; j++) {
      result.push(this.slice(i,j));
    }
  }
  return result;
};
