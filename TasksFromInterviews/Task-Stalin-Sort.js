function StalinSort (arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i-1]) {
      count += 1;
    }
  }
  console.log(`count: ${count}`);
  console.log(arr.sort((a, b) => a >= b ? 1 : -1));

}

StalinSort([1, 2, 6, 3, 0, 11])
