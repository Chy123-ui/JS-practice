// 第一题
const min = function (x, y) {
  return x < y ? x : y;
};
console.log(min(0, 10));
console.log(min(0, -10));
// 第二题
function isEven(x) {
  if (x === 0) {
    return true
  } else if (x === 1) {
    return false
  } else if (x > 1) {
    return isEven(x - 2);
  } else if (x < 0) {
    return isEven(x + 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
// 第三题
function countBs(x) {
  let counter = 0;
  for (let position = 0; position < x.length; position++) {
    if (x[position] === "B") {
      counter++;
    }
  } return counter;
}
console.log(countBs("BOB"));

function countChar(x, y) {
  let counter = 0;
  for (let position = 0; position < x.length; position++) {
    if (x[position] === y) {
      counter++;
    }
  } return counter;
}
console.log(countChar("kakkerlak", "k"));