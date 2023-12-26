'use strict';

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
//Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice
console.log(arr.slice(2)); // c d e
console.log(arr.slice(2, 4)); // c d
console.log(arr.slice(-2)); // d e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // b c
console.log(arr.slice()); // a b c d e
console.log(arr); // a b c d e
console.log([...arr]); // a b c d e

//Splice

// console.log(arr.splice(0, 4)); //a b c d döndürür ve 0. indexten başlayıp 4 indexi de diziden siler
// console.log(arr); // e

// console.log(arr.splice(2)); // c d e değerlerini döndürür ve 2. indexten sonrasını diziden siler
// console.log(arr); // a b

console.log(arr.splice(-1)); //e değerini döndürür ve son elemanı diziden siler
console.log(arr); // a b c d

//Reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);
console.log(arr2.reverse()); // orijinal diziyi de ters çevirir
console.log(arr2);

//Concat
const letters = arr.concat(arr2); // dizileri birleştirir
console.log(letters);
console.log([...arr, ...arr2]);

//Join
console.log(letters.join(' - '));
*/
///////////////////////////////////////////////////////////////////////////
/*
//At Method
const arr = [12, 15, 19];
console.log(arr[0]);
console.log(arr.at(0));

//son elamanı alma
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Furkan'.at(0));
console.log('Furkan'.at(-1));
*/
///////////////////////////////////////////////////////////////////////////
/*
//FOREACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`İşlem ${i + 1}:  ${movement} TL para yatırdınız`);
  } else {
    console.log(`İşlem ${i + 1}: ${Math.abs(movement)} TL para çektiniz`);
  }
}
console.log('--------FOREACH---------');

//break ve continue forEach içerisinde çalışmaz. forEach döngüsünden tüm elemanlar bitene kadar çıkılmaz
movements.forEach(function (mov, i, arr) {
  //Her zaman bu sırayla olur (value, index, array)
  if (mov > 0) {
    console.log(`İşlem ${i + 1}: ${mov} TL para yatırdınız`);
  } else {
    console.log(`İşlem ${i + 1}: ${Math.abs(mov)} TL para çektiniz`);
  }
});

//FOREACH WITH MAPS AND SETS
//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  // console.log(map);
});

//Set
const currenciesUnique = new Set([
  'USD',
  'GBP',
  'USD',
  'TL',
  'EUR',
  'EUR',
  'TL',
  'TL',
]);

console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, set) {
  // key yerine _ de yazılabilir. Gereksiz değişken
  console.log(`${key}: ${value}`); //key === value
  // console.log(set);
});
*/
///////////////////////////////////////////////////////////////////////////
/* 
// Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia];
  const dogsKateCopy = [...dogsKate];
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-1);
  // console.log(dogsJuliaCopy);
  const corrected = [...dogsJuliaCopy, ...dogsKate];
  // console.log(corrected);
  corrected.forEach(function (age, dogNumber) {
    const adultOrPuppy =
      age >= 3
        ? `is an adult, and is ${age} years old.`
        : `is still a puppy 🐶`;
    console.log(`Dog number ${dogNumber + 1} ${adultOrPuppy}`);
  });
};
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];
console.log('-----------TEST DATA 1----------');
checkDogs(julia, kate);
console.log('-----------TEST DATA 2----------');
checkDogs(julia2, kate2);

//Hocanın Çözümü
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
///////////////////////////////////////////////////////////////////////////
/*
// Coding Challenge #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (dogAge) {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else if (dogAge > 2) {
      return dogAge * 4 + 16;
    }
  });
  const adults = humanAges.filter(humanAge => humanAge > 18);
  // console.log(humanAges);
  console.log(adults);
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  // console.log(average);
  return average;
};

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const average1 = calcAverageHumanAge(testData1);
const average2 = calcAverageHumanAge(testData2);
console.log(average1);
console.log(average2);

//Hocanın Çözümü
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/
