console.log('Started...');

let objStr = {
  text : 'Один два три четыре пять',

  [Symbol.iterator]() {
    const text = this.text+ ' ';
    let indBeginWord = 0;
    let indEndWord = 0;
    let result = '';
    return {
      next() {
        let indEndWord = text.indexOf(' ', indBeginWord);
        if (indEndWord !== -1) {
          result = text.slice(indBeginWord, indEndWord);
          indBeginWord = indEndWord + 1;
          return {value: result, done: false}
        } else {
          return {value: undefined, done: true}
          }
      }
    }
  }
}

const iterator = objStr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (word of objStr) {
  console.log(word);
}

console.log([...objStr]);