console.log('Started...');

// async function* asynNumGenerator() {
//   var i = 0;
//   while (i < 8) {
//     yield i++;
//   }
// }

// (async () => {
//   for await (let num of asynNumGenerator()) {
//     console.log(num);
//   }
// })();

window.onload = function(){

  // document.forms[0].onsubmit = function(event){
  //     console.log('form--0');
  //     console.dir(event);
  //     console.log(event.target.elements[0].value);
  //     return false;
  //   };

  const myForm = document.querySelector('#myForm');
  console.dir(myForm);
  // myForm.onsubmit = function(event){
  //   console.log('form--0');
  //   console.dir(event);
  //   console.log(event.target.elements[0].value);
  //   return false;
  // };
  myForm.addEventListener('submit', (event) => {
    console.log('form--0');
    console.dir(event);
    console.log(event.target.elements[0].value);
    event.preventDefault();
    // return false;
  });

  document.forms[1].onsubmit = function(){
    console.log('form--1');
    if(this.elements[0].value == 4) return true;
    return false;
  };

};
