let arr3 = [1, 2, 3, 4, 5, 7, 34, 9, 50];

arr3.map((index, value) => {
  console.log(value);
});

var arr4 = arr3.filter((value, index) => {
  return value < 10;
});

console.log(arr4);

var arr = ["red", "green", "yellow", "red1", "gree1n", "yello11w"];
//012345
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("done");

var arrrr = ["red", "green", "yellow", "red1", "gree1n", "yello11w"];
//012345
for (let i = arrrr.length - 1; i >= 0; i--) {
  console.log(arrrr[i]);
}
