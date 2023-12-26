'use strict';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //tamamı entries
  [weekdays[3]]: {
    //key
    open: 12, //value
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //template literals kullanılıp içerisinde hesap da yapılabilir
  [weekdays[5]]: {
    //burda hesaplama yapılamazdı
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  Name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 enhanced object literals
  openingHours,

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    address = 'Ankara',
    time = '15.00',
  }) {
    console.log(
      `Sipariş alındı! ${this.starterMenu[starterIndex]} ve ${this.mainMenu[mainIndex]}, ${address} adresine ${time} saatinde teslim edilecek.`
    );
  },

  //ES6 enhanced object literals
  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Makarnanın malzemeleri: ${ingredient1}, ${ingredient2}, ${ingredient3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log('Tüm malzemeler:' + mainIngredient + ',' + otherIngredients);
  },
};
// STRING METHODS PRACTICE

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const cleanUpper = function (location) {
  return location.slice(0, 3).toUpperCase();
};

const noPunctuationFlights = flights
  .replaceAll('_', ' ')
  .replaceAll('+', '\n')
  .replaceAll(';', ' ')
  .replaceAll(':', 'h');
console.log(noPunctuationFlights);
const splitFlights = noPunctuationFlights.split('\n');
console.log(splitFlights);
for (const line of splitFlights) {
  const flight = line.trim().split(' ');
  if (flight.length == 5) {
    for (const [state, type, from, to, time] of [flight]) {
      const newFrom = cleanUpper(from);
      const newTo = cleanUpper(to);
      console.log(
        `🔴 ${state} ${type} from ${newFrom} to ${newTo} (${time})`.padStart(50)
      );
    }
  } else {
    for (const [type, from, to, time] of [flight]) {
      const newFrom = cleanUpper(from);
      const newTo = cleanUpper(to);
      console.log(`${type} from ${newFrom} to ${newTo} (${time})`.padStart(50));
    }
  }
}

//Hocanın Çözümü//
/*
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
*/
/////////////////////////////////////////////////////////////////
/* 
// Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  const textLine = text.split('\n');
  let i = 1;
  for (const line of textLine) {
    const [first, second] = line
      .trim()
      .replace('_', ' ')
      .toLowerCase()
      .split(' ');
    const upperSecond = second[0].toUpperCase() + second.slice(1);
    const fullString = first + upperSecond;
    console.log(`${fullString.padEnd(30)} ${'✅'.repeat(i)}`);
    i++;
  }
});
*/
//Hocanın Çözümü//
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
/////////////////////////////////////////////////////////////////
/*
//WORKING WITH STRINGS: PART 3

//Split and Join
console.log('hasan+furkan+baltacı'.split('+'));
console.log('hasan furkan baltacı'.split(' '));

const [firstName, lastName] = 'Furkan Baltacı'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('hasan furkan baltacı');
capitalizeName('yusuf baltacı');

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '-').padEnd(24, '+'));
console.log('Furkan'.padStart(15, '*').padEnd(24, '*'));

const maskCreditCard = function (number) {
  const str = String(number);
  // const str = number + '';
  const last = str.slice(-4); // Son 4 rakam alındı
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(487894));
console.log(maskCreditCard(4564231345));
console.log(maskCreditCard(4654987412318));
console.log(maskCreditCard(4654987412318565));

//Repeat
const message2 = 'Bad waether... All Departues Delayed...';
console.log(message2.repeat(3));

const planesInLine = function (p) {
  console.log(`There are ${p} planes in line ${'✈️'.repeat(p)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(10);
*/
/////////////////////////////////////////////////////////////////
/*
//WORKING WITH STRINGS: PART 2

const airline = 'Türk Hava Yolları';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
function fixCapital(passenger) {
  const passengerLower = passenger.toLocaleLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
}
console.log(fixCapital('fuRKaN'));
console.log(fixCapital('BaLtaCı'));

//Comparing Emails
const email = 'furkan@gmail.com';
const loginEmail = '     FuRKAN@GMail.Com   \n';

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceTR = '350,50 TL';
const priceUSA = priceTR.replace('TL', '$').replace(',', '.');
console.log(priceUSA);

const announcement = 'All passengers to boarding door 17. Boarding door 17!!!';

console.log(announcement.replace('door', 'gate')); // sadece ilkini değiştirdi

console.log(announcement.replace(/door/g, 'gate')); // ikisi de değişti

//Booleans
const plane = 'Airbus A350neo';
console.log(plane.includes('350'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Bu uçak neo özellikli Airbus ailesine ait bir uçak.');
}

//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('Uçağa binemezsiniz!');
  } else {
    console.log('Uçağa hoşgeldiniz');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a GUN for protection');
*/
/////////////////////////////////////////////////////////////////
/*
//WORKING WITH STRINGS: PART 1
const airline = 'Türk Hava Yolları';
const plane = 'A350';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Yolları'));

console.log(airline.slice(5));
console.log(airline.slice(5, 9)); //5. indexten öncesi ve 9. indexten sonrası çıkarılır ortadaki kalır

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1); // son terim
  if (s === 'B' || s === 'E') {
    console.log('Orta sıradaki koltuktasın');
  } else {
    console.log('Pencere kenarındasın');
  }
};

checkMiddleSeat('10B');
checkMiddleSeat('17C');
checkMiddleSeat('12E');

//stringler üzerinde fonksiyonları kullanmamız için javascript otomatik olarak stringi objeye çevirip fonkisoyun uygulayıp tekrar stringe çevirir
console.log(new String('Furkan'));
console.log(typeof new String('Furkan'));
console.log(typeof new String('Furkan').slice(-1));
*/
/////////////////////////////////////////////////////////////////
/* 
// Coding Challenge #3

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
console.log(gameEvents);
//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

//4.
for (const [minute, event] of gameEvents) {
  if (minute <= 45) {
    console.log(`[FIRST HALF] ${minute}: ${event}`);
  } else if (minute > 45) {
    console.log(`[SECOND HALF] ${minute}: ${event}`);
  }
}

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
*/
/////////////////////////////////////////////////////////////////
/*
//MAPS: ITERATION

//Convert an object to a map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz App

const question = new Map([
  ['question', 'Dünyadaki en iyi programlama dili hangisidir?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Doğru 🎉'],
  [false, 'Yanlış ⛔'],
]);
console.log(question);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Cevap ${key} : ${value}`);
  }
}
const answer = Number(prompt('Cevabınızı giriniz.'));
console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);

console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
/////////////////////////////////////////////////////////////////
/*
//MAPS: FUNDAMENTALS
const rest = new Map();
rest.set('name', 'Pizza Dünyası');
rest.set(1, 'Ankara');
console.log(rest.set(2, 'İstanbul'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'Açık')
  .set(false, 'Kapalı');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('open'));
console.log(rest.get(2));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

rest.set(document.querySelector('h1'), 'Heading');

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); //tanımsız

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr));
*/
/////////////////////////////////////////////////////////////////
/*
//SETS
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Risotto',
]);
console.log(orderSet);

console.log(new Set('Furkan'));
console.log(orderSet.size);
console.log(new Set('Furkan').size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
orderSet.delete('Pizza'); // kaç tane olursa olsun hepsini siler
// orderSet.clear(); // tüm elemanları siler
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];
const staffUniqueArray = [...new Set(staff)]; // diziye dönüştürme
console.log(staffUniqueArray);
console.log(staffUniqueArray.length);

const staffUniqueSet = new Set(staff);
console.log(staffUniqueSet);
console.log(staffUniqueSet.size);
*/
/////////////////////////////////////////////////////////////////
/* 
// Coding Challenge #2

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}
//2
let averageOdds = 0;
let sumOdds = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  // console.log(odd);
  sumOdds += odd;
}
averageOdds = sumOdds / odds.length;
console.log('Average Odds : ' + averageOdds);
//3
const oddAndTeams = Object.entries(game.odds);
console.log(oddAndTeams);

for (const [team, odd] of oddAndTeams) {
  // console.log(team, odd);
  let teamStr = team === 'x' ? 'Draw' : `victory ${game[team]}`; // özellik olarak kullanmak için köşeli parantez
  // console.log(teamStr);
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//bonus

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
for (const [scorer, goals] of Object.entries(scorers)) {
  goals > 1
    ? console.log(`${scorer} scored ${goals} goals`)
    : console.log(`${scorer} scored ${goals} goal`);
}

/////////////////////////////////////////////////////////////////
/*
//LOOPING OBJECTS : Object Keys, Values and Entries

//Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `Haftanın ${properties.length} günü açığız: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day} `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

// [key, value] -> [day, {open, close}]
for (const [day, { open, close }] of entries) {
  console.log(`${day} gününde açılış saati ${open}, kapanış saati ${close}`);
}
*/
///////////////////////////////////////////////////////////////
/*
//OPTIONAL CHAINING (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon.open); // erroe
//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Kapalı'; //Değişkeni özellik olarak kullanmak için köşeli paranteze al

  console.log(`${day} gününde açılış saati: ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 0) ?? 'Böyle bir fonksiyon yok!');
console.log(restaurant.orderRisotto?.(0, 0) ?? 'Böyle bir fonksiyon yok!');

//Arrays
const users = [{ name: 'Furkan', age: 23, id: 2 }];
console.log(users[0]?.name ?? 'Dizinin bu indexi boş');
console.log(users[1]?.name ?? 'Dizinin bu indexi boş');
*/
///////////////////////////////////////////////////////////////
/*
// THE FOR-OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

// for (const item of menu.entries()) {
//   console.log(item[0] + 1 + ' : ' + item[1]);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
*/
///////////////////////////////////////////////////////////////
/* 
// Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [gk1, ...fieldPlayers1] = game.players[0];
const [gk2, ...fieldPlayers2] = game.players[1];

const players1 = [gk1, ...fieldPlayers1];
const players2 = [gk2, ...fieldPlayers2];
console.log(players1);
console.log(players2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//const {odds: {team1, x: draw, team2}} = game;
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} tane gol atıldı.`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Birinci takım kazanmaya daha yakın.');
team1 > team2 && console.log('İkinci takım kazanmaya daha yakın.');

///////////////////////////////////////////////////////////////
/*
//LOGICAL ASSIGNMENT OPERATORS
const restaurant1 = {
  Name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const restaurant2 = {
  Name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
// restaurant1.numGuests = restaurant1.numGuests || 50;
// restaurant2.numGuests = restaurant2.numGuests || 30;

// restaurant1.numGuests ||= 50;
// restaurant2.numGuests ||= 50;

//Nullish assignment operator (null or undefined)
restaurant1.numGuests ??= 50;
restaurant2.numGuests ??= 50;
console.log(restaurant1.numGuests);
console.log(restaurant2.numGuests);

//AND assignment operator
// restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';
// restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';
restaurant1.owner &&= '<ANONYMOUS>';
restaurant2.owner &&= '<ANONYMOUS>';
console.log(restaurant1);
console.log(restaurant2);
*/
///////////////////////////////////////////////////////////////
/*
//THE NULLISH COALESCING OPERATOR
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 150;
console.log(guests); //150

//Nullish : null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 150;
console.log(guestsCorrect); // 0
*/
///////////////////////////////////////////////////////////////
/*
//SHORT CIRCUITING (&& and ||)
console.log('----OR----');
console.log(5 || 'FURKAN'); // 5
console.log(0 || 'FURKAN'); // FURKAN
console.log(null || 'FURKAN'); // FURKAN
console.log(undefined || null); // null
console.log(undefined || 15); // 15
console.log(true || 'FURKAN'); // true
console.log(false || 'FURKAN'); // FURKAN
console.log(false || 0); // 0
console.log(0 || false); //false
console.log('' || 'FURKAN'); // FURKAN

console.log(undefined || 0 || '' || null || false || 'Hello' || 17 || null); //Hello

restaurant.numGuests = 270; // konuk sayısı sıfır olursa guest1 ve guest2 100 olarak döner
const guest1 = restaurant.numGuests ? restaurant.numGuests : 100;
console.log(guest1);

const guest2 = restaurant.numGuests || 150;
console.log(guest2);

console.log('----AND----');
//Yanlış olan ilk değeri, yanlış yoksa son değeri yazdırır
console.log(0 && 'Furkan'); // 0
console.log(17 && 'Furkan'); // Furkan

console.log('Hello' && 17 && null && 'Furkan'); //null

//Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mantar', 'Zeytin');
}
restaurant.orderPizza && restaurant.orderPizza('Mantar', 'Sucuk', 'Zeytin');
*/
///////////////////////////////////////////////////////////////
/*
//REST PATTERN  AND PARAMETERS

// 1) Destructuring

//SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);
//REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b, others);
console.log(...others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);
console.log(pizza, risotto, ...otherFoods);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 5);
add(2, 4, 8, 9, 7);
add(5, 7, 1, 9, 7, 12, 25, 1, 3, 6, 7, 10);

const x = [20, 50, 70];
add(...x);

restaurant.orderPizza('mantar', 'sucuk', 'zeytin', 'biber');
restaurant.orderPizza('sucuk');
*/
///////////////////////////////////////////////////////////////
/*
//The SPREAD OPERATOR
const arr = [5, 6, 7];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Lasagna'];
console.log(...newMenu);
//Copt array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menu);

//Iterables : arrays, strings, maps, sets. NOT objects
const str = 'Furkan';
const letter = [...str, '', 'B.'];
console.log(letter);
console.log(...letter);
console.log(...str);
// console.log(`${...str} Baltacı`); // Bu şekilde kullanılamaz !!!!!

//Example
const ingredients = [
  prompt('Makarna yapmak için 1. Malzeme ?'),
  prompt('2. Malzeme ?'),
  prompt('3. Malzeme ?'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {
  foundedIn: 1999,
  ...restaurant,
  founder: 'Hasan Furkan Baltacı',
};
console.log(newRestaurant);
// console.log(...newRestaurant); // Bu şekilde kullanılamaz !!!!!!!!

const restaurantCopy = { ...restaurant };
restaurantCopy.Name = 'Little Caesars';
console.log(restaurant.Name);
console.log(restaurantCopy.Name);
*/
///////////////////////////////////////////////////////////////
/*
//DESTRUCTURING OBJECTS
//Using objects as arguments
restaurant.orderDelivery({
  starterIndex: 1,
  mainIndex: 1,
  time: '19.30',
  address: 'Çankaya/Ankara',
});
//Using default values of parameters as arguments
restaurant.orderDelivery({
  starterIndex: 2,
});

//Desctructuring
const { Name, openingHours, categories } = restaurant;
console.log(Name, openingHours, categories);

const {
  Name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 222;
let b = 123;
console.log(a, b);
const obj = { a: 10, b: 20, c: 30 };
({ a, b } = obj); //parantez içine almak zorunlu
console.log(a, b);
//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
///////////////////////////////////////////////////////////////
/*
//DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

//Destructuring
const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// //Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(3, 0);
console.log(starter + ' and ' + mainCourse);

//Nested destructuring
const nested = [2, 5, [7, 9]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

//Default values
const [q = 1, w = 1, e = 2, r = 8] = [5, 6, 7];
console.log(q, w, e, r);
*/
