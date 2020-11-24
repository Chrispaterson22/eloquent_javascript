function range(start, end, step = start < end ? 1 : -1) {
  let range = [];
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      range.push(i);
    }
  }
  else {
    for (var i = start; i >= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

function sum(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
