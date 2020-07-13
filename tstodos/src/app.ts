console.log('App started!!');
console.log('Test typescript...');

let h1:HTMLHeadElement = document.querySelector('h1');
h1.innerHTML = 'One line!';

let h2:HTMLHeadElement = document.createElement('h2');
h2.innerText = 'Two line!';

document.body.appendChild(h2);

let h3:HTMLHeadElement = document.createElement('h3');
h3.innerText = 'Third line!!';

document.body.appendChild(h3);
