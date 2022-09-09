// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })

// // number data type

// let length = 20;
// console.log(length);

// // string data type

// let firstname = "Prakash";
// console.log(firstname);

// let x = 18 + " R15";
// console.log(x);

// let y = 4 + 3 + " Bullet";
// console.log(y);
// // array

// const bikes = ["R15", "Bullet", "KTM"];
// console.log(bikes);

// // object

// const person = {
//     firstName: "Prakash",
//     lastName: "Praveen",
//     age: 22
// };
// console.log(person);

// let hero = "Prakash Praveen";
// console.log(hero);

// // boolean
// let a = 7;
// let b = 7;
// let z = 6;
// console.log(a == b);
// console.log(a == z);

// // typeof
// console.log(typeof 183);
// console.log(typeof "Dhoni");


// // a;
// // console.log(a);


// let c;
// console.log(c);

// let e ='';
// console.log(e);


// Math PI()
console.log(Math.PI);     

// Math.round()
console.log(Math.round(7.4));
console.log(Math.round(7.6));
console.log(Math.round(-7.4));

// Math.ceil()

console.log(Math.ceil(7.0));
console.log(Math.ceil(7.6));
console.log(Math.ceil(-7.0));

// Math.floor()

console.log(Math.floor(7.8));
console.log(Math.floor(7.6));
console.log(Math.floor(-7.2));

// Math.trunc()

console.log(Math.trunc(7.5));
console.log(Math.trunc(7.6));
console.log(Math.trunc(-7.2));

// Math.sign()

console.log(Math.sign(7));
console.log(Math.sign(0));
console.log(Math.sign(-7));

// Math.pow()

console.log(Math.pow(7, 2));

// Math.sqrt()

console.log(Math.sqrt(49));

// Math.abs()

console.log(Math.abs(-7.8));

// Math.sin()

console.log(Math.sin(4));

// Math.cos()

console.log(Math.cos(4));

// Math.min() 

console.log(Math.min(0, 150, 30, -7, -70));

// Math.max()

console.log(Math.max(0, 150, 20, -8, -150));

// Math.random()

console.log(Math.random());

// Math.log()

console.log(Math.log(1));

// Math.log2()

console.log(Math.log2(10));

// Math.log10()

console.log(Math.log10(100))




document.getElementById('math').innerHTML=Math.floor((Math.random())*6)+1;



var btn=document.getElementById('btn');
var color=document.getElementById('color');


const bttn=()=>{
    const ranColor=Math.floor(Math.random()*16773728);
    document.body.style.backgroundColor=ranColor;
}
btn.addEventListener("click",bttn);
bttn();