let array = [9, 8, 7, 6, 5]

function StalinSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log(`arr[i]: ${arr[i]}`)
    if (arr[i] < arr[i-1]) {
      arr.splice(i, 1)
      i -= 1
    }
    console.log(`arr: ${arr}`)
    console.log('-----------------')
  }

}

StalinSort(array)
console.log(array)
