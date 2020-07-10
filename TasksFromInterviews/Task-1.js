function typeStarsWithTemp (n) {
  console.log('Started');
  let temp = '';
  for (let i = 0;  i < n; i++) {
    temp += '*';
    console.log(temp)
  }
  console.log('End for')
}

function typeStarsWithoutTemp (n) {
  console.log('Started');
  for (let i = 0;  i < n; i++) {
    console.log('*'.repeat(i+1))
  }
  console.log('End for')
}


typeStarsWithoutTemp(5);
