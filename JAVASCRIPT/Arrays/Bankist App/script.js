'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  //Sıralama seçeneğine göre banka hareketleri gösterilecek. Orijinal diziyi bozmadan kullanmak için sorttan önce slice ile kopyalayıp sırala. Çünkü sıralamak istenmediği zaman orijinal dizi sırası kullanılacak. Kopyalamadan sıralanırsa orijinal dizi de sıralı olur ve sürekli sıralı şekilde kalır.
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, i) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    //css özelliği için classlar da template içinde yazıldı
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${movement} €</div>
        </div>`;

    //her bir movementın sıralandığı parent div seçildi
    containerMovements.insertAdjacentHTML('afterbegin', html); // afterbegin -> movements divinden hemen sonra html metnini ekler
  });
};
// console.log(containerMovements.innerHTML);

//reduce ile bakiye hesaplama
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0); //acount obejelerine balance eklendi. Kullanıcı giriş yaptıktan sonra oluşur
  labelBalance.textContent = `${account.balance} €`;
};

// IN - OUT- INTEREST
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumIn.textContent = `${incomes}€ `;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, withdrawal) => acc + withdrawal, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0) // yatan paralar seçildi
    .map(deposit => (deposit * account.interestRate) / 100) // herkese özel olarak faiz oranı uygulandı ve faizlerin olduğu dizi döndürüldü
    .filter(int => int >= 1) // faizi en azından 1 olanlar seçildi
    .reduce((acc, int) => acc + int, 0); // faizler toplandı
  labelSumInterest.textContent = `${interest}€`;
};

//yeni bir dizi oluşturmak için map
//bir dizideki elemanları sadece kullanmak için foreach
//USERNAME
const createUsernames = function (accts) {
  accts.forEach(function (acct) {
    //her bir acount a username özelliği ekle
    acct.userName = acct.owner
      .toLowerCase()
      .split(' ') // her kelime ayrı bir dizi haline getirildi
      .map(n => n[0]) //her kelimenin(dizinin) ilk harfini ayrı ayrı döndür
      .join(''); //herpsini string olarak bir araya yan yana getir
  });
};
createUsernames(accounts); // kullanıcıları içeren dizi [account1, account2, account3, account4];
// console.log(accounts); // her account userName özelliği aldı

//UI GÜNCELLEME
const updateUI = function (currentAcct) {
  //Para transferlerini görüntüle
  displayMovements(currentAcct.movements);
  //Toplam parayı görüntüle
  calcDisplayBalance(currentAcct);
  //in-out-interest bölümünü görüntüle
  calcDisplaySummary(currentAcct);
};
//EVENT HANDLERS

let currentAccount;

//KULLANICI GİRİŞİ
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // submitin yenileme özelliğini kapamak için

  currentAccount = accounts.find(
    acct => acct.userName === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcom back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // girişten sonra input temizleme
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur(); //pin girişi üzerinde kalan imlecin focusunu kaldırma

    // bölgenin opaklığını 0dan 100e çekerek bölgeyi girişten sonra görünür kılma
    containerApp.style.opacity = 100;
    // console.log('LOGIN');
    updateUI(currentAccount);
  }
});

//PARA TRANSFERİ
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const receiverAcc = accounts.find(
    acct => acct.userName === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  console.log(receiverAcc, amount);
  //Transferin gerçekleşebilmesi için gerekli şartlar
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  if (
    amount > 0 &&
    receiverAcc && // transfer edilecek hesap var olmalı
    receiverAcc?.userName != currentAccount.userName && //aynı hesaba transfer yok
    amount <= currentAccount.balance
  ) {
    //transfer geçekliştirme aşaması. Hesap hareketleri dizeleri güncelleniyor
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    // console.log('Transfer gerçekleşti');
    // console.log(accounts);
  }
});

//KREDİ ÇEKME
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  //Kullanıcının çekmeye çalıştığı paranın onda biri, hesabına aktarılan en yüksek miktardaki paradan daha fazla olamaz
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
//Kullanıcının çekmeye çalıştığı paranın onda biri, hesabına aktarılan en yüksek miktardaki paradan daha fazla olamaz

//KULLANICI KAYDI SİLME

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acct => acct.userName === currentAccount.userName
    );
    // console.log(index);
    // console.log('Hesap silindi');

    //Hesap diziden atıldı
    accounts.splice(index, 1);
    //arayüz gizlendi
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

//BANKA HAREKETLERİNİ SIRALAMA

let clickCount = 0;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  if (!clickCount) {
    displayMovements(currentAccount.movements, true);
    clickCount++;
  } else {
    displayMovements(currentAccount.movements, false);
    clickCount--;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// Orijinal diziyi kullanarak yeni bir dizi üretir ve geri döndürür. Orijinal dizinin yapısını bozmaz
//Fonksiyonel programlamaya daha uygun
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
const movementsUSDarrow = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDarrow);

//Fonksiyonel programlamaya uygun değil
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);
console.log(movements);

//map sayesinde foreachteki gibi elemanları teker teker konsola yazmak yerine döndürdüğümüz her değerle yeni bir dizi oluşturabiliyoruz
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdres'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//The filter Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//sıfırdan büyük olanlara teker teker bir dizi içine atıp diziyi döndürür. Fonksiyon zincirlemelerinde kullanıldığı için daha etkili bir yöntem (map de aynı şekilde)
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(deposits);

//oluşturulan diziye değer atar. Zincirlemede kullanılamaz
const depositsFor = [];
for (const mov of movements) if (mov > 3) depositsFor.push(mov);

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//The reduce Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//acc = accumulator -> anlık tüm değerleri üzerindeki işleme göre kendine ekler ve biriktirip tek bir değer olarak döndürür
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`${i}: ${acc}`);
//   return acc + curr;
// }, 0); //accumulator başlangıç değeri

const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(balance);

//Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]); //max değer bulunurken buraya sıfır yerine ilk değeri yaz yoksa negatif sayılar arasında sıralama yapılırken hep sıfır döner
console.log(max);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//Chaining Methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

console.log(movements);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//The find Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0); // sadece sıfırdan küçük ilk değeri döndürür
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(act => act.owner === 'Jessica Davis'); // eşleşen objeyi döndürdü
console.log(account);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//Some and Every
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//equality
console.log(movements.includes(-400));

//Some
//condition
console.log(movements.some(mov => mov === -400)); //bunun yerine includes daha mantıklı

const anyDeposits = movements.some(mov => mov > 0); //Daha çok böyle durumlarda kullanılır.
//dizinin içerisinde sıfırdan büyük en az 1 değer bile varsa true, hiç sıfırdan büyük değer yoksa false
console.log(anyDeposits);

//Every
//Dizinin tüm elemanları şartı sağlıyosa true döndürür
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//Flat and Flatmap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //Bir kademe derine inip içerdeki dizinin elemanlarını dışardaki diziye dahil etti

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // iki kademe içeri gitti. Parantez içi boyutu temsil eder

//flat
const overalBalance = accounts
  .map(acct => acct.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap
//Burda parantez içinde boyut kullanılamaz
const overalBalance2 = accounts
  .flatMap(acct => acct.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//SORTING ARRAYS

//Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); //Orijinal diziyi değiştirdi

//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// console.log(movements.sort()); // İşe yaramaz. Çünkü stringe çevirip karşılaştırıri.

//return >0  sıra değişir
//return <0 sıra aynı kalır

//a ve b soldan sağa peşpeşe gelen iki indeks

//Küçükten büyüğe sıralama
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

//Büyükten küçüğe sıralama
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

const movements2 = [500, 450, 400, -3000, 650, -130, 750, -500];
console.log('--------------');
//Bir dizinin orijinal halini bozmadan sıralamak için slice() kullanıp kopyasını sırala
console.log(movements2);
console.log(movements2.slice().sort((a, b) => b - a));
console.log(movements2);
*/
