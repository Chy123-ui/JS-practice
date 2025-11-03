//第一题
let string = ""
for (let counter = "0"; counter < 7; counter++) {
  string += "#";
  console.log(string);
}
//第二题
for (let counter = "1"; counter < 100; counter++) {
  if (counter % 3 === 0) {
    if (counter % 5 != 0) {
      console.log("Fizz");
    } else {
      console.log("FizzBuzz");
    }
  } else if (counter % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(counter);
  }
}
//第三题
let size = 8;
let row = "";
for (let x = 0; x < size; x++) {
  let z = "";
  for (let y = 0; y < size; y++) {
    if ((x + y) % 2 === 0) {
      z += " ";
    } else {
      z += "#";
    }
  } row += (z + "\n");
} console.log(row);