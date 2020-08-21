// Add your functions here
const map = (arr, callback) => {
    let newArr = [];
    arr.forEach( e => newArr.push(callback(e)));
    return newArr;
}

const reduce = (array, reducer, initialValue = array[0]) => {
    let value = initialValue;

    if (value != array[0]) {
    array.forEach( e => {
      value = reducer(value, e)
    })
    return value;
  } else {
    for (let i = 1; i < array.length; i++) {
        let e = array[i]
        value = reducer(value, e)
    }
  }
  return value;
};