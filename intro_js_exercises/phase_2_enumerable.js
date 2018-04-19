

Array.prototype.myEach = function myEach(myEachCallback){
  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    myEachCallback(element);
  }
};

Array.prototype.myMap = function myMap(myMapCallback){
  let result = [];

  function takeElementAndInvokeMyMapCallback(el) {
    const callbackResult = myMapCallback(el);
    result.push(callbackResult);
  }

  this.myEach(takeElementAndInvokeMyMapCallback);

  return result;
};
// console.log([1,2,3].myeach(doubleN))
  function doubleN(el){
    return el*2;
  }


Array.prototype.myReduce = function myReduce(callback, initVal){
  initVal = initVal || this[0];
  let result = initVal;
  let temp = this;
  if (arguments.length < 2) {
    temp = this.slice(1);
  }
  temp.myEach(
    function (el){
      const callbackResult = callback(result, el);
      result = (callbackResult);
    }
  );

  return result;

};

console.log([1,2,3].myReduce( (total, item) => total * item ));
