'use strict';
/////////////////////////////////////////////////////////////////////////////
/*
//DEFAULT PARAMETERS
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 250 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};
createBooking('23');
createBooking('24', 2);
createBooking('24', 3, 600);
createBooking('26', undefined, 500);
console.log(bookings);
*/
/////////////////////////////////////////////////////////////////////////////
/*
//PASSING ARGUMENTS: VALUE VS. REFERENCE 
const flight = 123;
const fromTo = 'Ankara - İstanbul';
const furkan = {
  name: 'Hasan Furkan Baltacı',
  passport: 1234567987889,
};

const checkIn = function (flightNum, passanger, fromTo) {
  flightNum = 999;
  fromTo = 'Ankara - İzmir';
  passanger.name = 'Mr. ' + passanger.name;
  if (passanger.passport === 1234567987889) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
//Objeler referans tipinde oluğu için fonksiyondan sonra değişirken strin ve number primitive tipinde olduğu için değişmedi
//JavaScript'e pass by reference yok, varmış gibi olsa dahi
//Nesnelerde ilettiğimiz bellek adresi içeren bir değerdir. Referans değildir.
// checkIn(flight, furkan, fromTo);
// console.log(flight);
// console.log(furkan);
// console.log(fromTo);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(furkan);
checkIn(flight, furkan, fromTo);
console.log(flight);
console.log(furkan);
console.log(fromTo);
*/
/////////////////////////////////////////////////////////////////////////////
/*
//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Hasan Furkan Baltacı', oneWord);
transformer('Hasan Furkan Baltacı', upperFirstWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Hasan', 'Furkan', 'Baltacı'].forEach(high5);
*/
/////////////////////////////////////////////////////////////////////////////
/*
//FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//function......
const greeterHey = greet('Hey');
greeterHey('Hasan');
greeterHey('Furkan');

//function....
greet('Hello')('Furkan');

//function1                //function2
const greet2 = greeting => Name => console.log(`${greeting} ${Name}`);
greet2('Hi')('Hasan');
*/
/////////////////////////////////////////////////////////////////////////////
/*
//THE CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Hasan Furkan Baltacı');
lufthansa.book(150, 'Alperen Baltacı');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//book(123, "Hasan Furkan Baltacı");  //olmaz

//Call Method
book.call(eurowings, 123, 'Yusuf Baltacı');
book.call(eurowings, 250, 'Hasan Furkan Baltacı');
book.call(lufthansa, 520, 'Hasan Furkan Baltacı');
console.log(lufthansa);
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 4561, 'Hasan Furkan');
console.log(swiss);

//Apply Method
const flightData = [160, 'Furkan Baltacı'];
//ikinci argüman veri dizisi olmalı
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); //daha iyi bir yöntem
console.log(swiss);
*/
/////////////////////////////////////////////////////////////////////////////
/*
//THE BIND METHOD

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(123, 'Hasan');
bookLH(45, 'Furkan');
bookLX(456, 'Baltacı');

const bookEW23 = book.bind(eurowings, 23); // book fonksiyonunun uçuş numarası olan ilk argümanını da atadık. Tek gerken yolcu ismi
bookEW23('Hasan Furkan Baltacı');
bookEW23('Hasan');

//With Event Listeners

lufthansa.planes = 300;
console.log(lufthansa);

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes); //bind kullanılmazsa; this eventHandlerı tetikleyen öğeyi belirtir(butonun kendisini, html formatında)
};
// lufthansa.buyPlane(); // bu şekilde çağırırsam, this lufthansa objesi olur

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //bind sayesinde fonksiyondaki this lufthansa'yı işaret ediyor

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addKDV = addTax.bind(null, 0.2);
console.log(addKDV(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addKDV2 = addTaxRate(0.2);
console.log(addKDV2(500));
*/
/////////////////////////////////////////////////////////////////////////////

//Coding Challenge 1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const num = prompt(
      `${this.question}\n${this.options.join('\n')}`,
      'Write option number'
    );
    const numberNum = Number(num);
    if (numberNum <= this.answers.length - 1 && numberNum >= 0) {
      this.answers[numberNum] += 1;
    } else {
      alert('You entered the wrong number');
    }
    this.displayResults(this.options, this.answers);
  },

  displayResults(opt, arr) {
    //   console.log(opt, arr);
    if (opt === null) {
      //   for (const num of arr) {
      //     console.log(String(num));
      //   }
      console.log(...String(arr));
    } else {
      console.log('POLL RESULTS');
      for (let i = 0; i < arr.length; i++) {
        //   console.log(opt[i].slice(3) + arr[i]);
        console.log(`${opt[i].slice(3)} : ${arr[i]}`);
      }
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const displayResults = poll.displayResults;
const testDataDisplay = displayResults.bind(null, null);
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];
testDataDisplay(testData1);
testDataDisplay(testData2);

//   BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
/*
//Hocanın Çözümü

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
*/
/////////////////////////////////////////////////////////////////////////////
/*
//Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();
*/
/////////////////////////////////////////////////////////////////////////////

//CLOSURES

//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 500;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f); //scopes -> closure a: 23

h();
f();
console.dir(f); //scopes -> closure b: 500

//Example 2

const boardPassengers = function (numPassengers, wait) {
  const perGroup = numPassengers / 3;

  //Oluşturulduğu bölgedeki tüm değişkenleri kullanabiliyor. Closure sayesinde
  setTimeout(function () {
    console.log(`We are now boarding all ${numPassengers} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); //milisaniye cinsinden ikinci argüman kadar bekledikten sonra çalışır.

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(300, 5);
