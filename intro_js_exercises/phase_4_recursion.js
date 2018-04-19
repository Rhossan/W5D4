function range(start, end){
  // base case
  if (start === end) {
    return end;
  }else {
    return [start].concat(range(start+1,end));
  }

}
