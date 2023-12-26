// console.log("Hoş Geldiniz");
// console.log("123");
// console.error("Hata oluştu");
// console.warn("Uyarı aldınız");

// //Değişkenler

// var password;
// password = "hasa123";
// console.log(password);
// let yass = 23;
// console.log(yass);

// //Değişken tanımlama kuralları

// // Değişken isimleri rakam ile başlayamaz
// // Kullanılan komutlar değişken adı olarak kullanılamaz
// // Değişken adı oluştururken kelimeler arası boşluk bırakılamaz
// // Türkçe karakter kullanılamaz


// // Sabitler
// const furkan = 55;

// // 1.Değişken Türleri

// // 1.1.Primitive Types

// // 1.1.1.String

// let adimiz = "Furkan";
// console.log(typeof adimiz);

// // 1.1.2.Number

// let yas = 24;
// console.log(typeof yas);

// // 1.1.3. Boolean

// let krediKullanimi = false;
// console.log(typeof krediKullanimi);

// // 1.1.4. Undefined

// let phone;
// console.log(typeof phone);

// // 1.2. Reference Types : Objects

// // 1.2.1. Array

// let liste = ["Hasan", "Furkan", "Baltaci"];
// console.log(typeof liste);

// // 1.2.2. Object Literals

// let address = {
//     city: "İstanbul",
//     country: "Türkiye",
// };

// console.log(typeof address);

// // function variable

// var hesapla = function () {
//     return 0;
// }
// console.log(typeof hesapla);

// // 3 tane = (===) hem verilerin değerini hem de türlerini karşılaştırıp true ya da false değer döndürür
// // ör.    veri = 5 === "5"    veri = false olur çünkü değer aynı olsa da tür farklı
// // ör. veri = 5 === 5    veri = true çünkü her şeyi aynı
// // Bu hariç Operatörlerin hepsi C/C++'taki gibi




// // DATE OBJECT

// let zaman = new Date();


// //Get Methods

// console.log(zaman.getMonth()); // ocak ayı sıfırdan başlar aralık 11
// console.log(zaman.getDate()); // ayın kaçıncı günü olduğu
// console.log(zaman.getFullYear()); // yıl
// console.log(zaman.getDay()); // pazar = 0    pazartesi = 1 ......  cumartesi = 6
// console.log(zaman.getHours());
// console.log(zaman.getMinutes());
// console.log(zaman.getSeconds());
// console.log(zaman.getMilliseconds());


// console.log(zaman);
// console.log(typeof zaman);

// let birthday = new Date(1999, 5, 10, 9, 15, 10, 10);

// console.log("Doğduğum gün: ", birthday);

// let age;


// age = zaman.getFullYear() - birthday.getFullYear();

// console.log("Yaşım : ", age);

// // Set Methods

// zaman.setDate(10);
// zaman.setMonth(5);
// zaman.setFullYear(2015);
// zaman.setHours(20);

// console.log(zaman);


// // NUMBERS

// let veri;
// let veri2;
// let veri3;

// veri = Number("5");
// veri2 = parseInt("3");
// veri3 = parseFloat("6");
// console.log(veri);
// console.log(typeof veri);
// console.log(veri2);
// console.log(typeof veri2);
// console.log(veri3);
// console.log(typeof veri3);

// let veri4 = isNaN("c5");
// let veri5 = isNaN("5");

// console.log(veri4);
// console.log(typeof veri4);
// console.log(veri5);
// console.log(typeof veri5);

// var basamak = 15.4564564231;
// basamak = basamak.toPrecision(5);
// console.log(basamak);

// var virguldenSonra = 123.789564;
// virguldenSonra = virguldenSonra.toFixed(5);
// console.log(virguldenSonra);

// let data = Math.PI;
// let yuvarlama = Math.round(3.2);
// let yuvarlama2 = Math.round(3.5);

// let yukariYuvarlama = Math.ceil(3.2);
// let asagiYuvarlama = Math.floor(3.8);
// let kuvvetAlma = Math.pow(3, 4);
// let karekok = Math.sqrt(81);
// let mutlakDeger = Math.abs(-50);
// let enKucukBulma = Math.min(11, 5, 9, 22);
// let enBuyukBulma = Math.max(11, 9, 22, 45, 12);
// let rastgeleSayi = Math.floor(Math.random() * 10); // ONDALIKLI KISMI ATILMIŞ YANİ TAM SAYIYA YUVARLANMIŞ 1 İLE 10 ARASI RASTGELE SAYI VERİR 10LA ÇARPMAZSAK SAF HALİ 0 İLE 1 ARASI

// //STRINGS

// let ad = "Furkan";
// let soyad = "Baltaci";

// let adSoyad = ad + " " + soyad;
// adSoyad = "Benim adım " + ad + " soyadım ise " + soyad + ", " + mutlakDeger + " yaşındayım";
// adSoyad = ad.concat(" ", soyad);

// adSoyad = adSoyad.toLocaleUpperCase();
// ad = ad.toLocaleLowerCase();

// let kelimeninHarfArasiAlma = adSoyad.substring(3, 7);
// let yukardakininAynisi = adSoyad.slice(1, 4);

// let karakterArama = soyad.indexOf("c");
// console.log(karakterArama);

// let veriyiGuncelle = adSoyad.replace("FURKAN BALTACI", "Begühan Kızılkan");
// console.log(adSoyad);
// console.log(veriyiGuncelle);

// let karakterUzunluk = veriyiGuncelle.length;
// console.log(karakterUzunluk);

// let hobies = "futbol yazılım oyun spor müzik";

// let diziyeAyirma = hobies.split(" ");
// console.log(typeof hobies);
// console.log(typeof diziyeAyirma);

// // ARRAYS

// let adlar = ["baltacı", "furkan", "begühan", "hasan"];
// let yaslar = [25, 12, 23, 24, 45, 11];
// let mix = ["arda", "yılmaz", 1990, null, undefined, ["programlama", "futbol"]];
// console.log(adlar);
// console.log(typeof adlar);
// console.log(adlar.length);

// console.log(yaslar);
// console.log(typeof yaslar);
// console.log(yaslar.length);

// console.log(mix);
// console.log(typeof mix);
// console.log(mix.length);

// // get array item

// console.log(adlar[2]);

// //set array item

// yaslar[1] = 55;
// console.log(yaslar);

// adlar[adlar.length] = "mehmet";
// console.log(adlar);

// // add item

// adlar.push("yusuf");
// console.log(adlar);

// adlar.unshift("sude");
// console.log(adlar);

// //remove item

// yaslar.pop(); // dizi içindeki son elemanı siler
// console.log(yaslar);

// yaslar.shift();
// console.log(yaslar); // dizi içindeki ilk elamanı siler

// // index0f eleman arama

// let index = adlar.indexOf("furkan");
// console.log("index : " + index);


// //sıralamayı ters çevirme

// adlar.reverse();
// console.log(adlar);

// // sayıları küçükten büyüğe doğru ya da stringleri alfabeye göre sıralama

// yaslar.sort();
// console.log(yaslar);

// adlar.sort();
// console.log(adlar);

// // dizi birleştirme

// let birlesmisDizi = adlar.concat(yaslar);
// console.log(birlesmisDizi);
// console.log(adlar);

// adlar.splice(4, 1, "alperen"); // dizinin 2. indeksini silip (indeksten sonra 1 yazıldığı için) yerine alperen yazdı
// console.log(adlar);

// adlar.splice(4, 0, "cemile"); // 4. indeksin yanına 4. indeksi silmeden 4. indekse cemile ekledi ( indeksten sonra 0 yazıldığı için)
// console.log(adlar);

// // Koşullu Durumlar ( if else)

// // C/C++ aynısı

// // bun yapı çok sık kullanılacak
// let id = "213156"
// if (typeof id != "undefined") {
//     console.log("id : " + id);
// }
// else {
//     console.log("no id");
// }


// // switch koşul yapısı

// let islem = 4;

// switch (islem) {
//     case 1:
//         console.log("1 nolu islem yapıldı");
//         break;

//     case 2:
//         console.log("2 nolu islem yapıldı");
//         break;
//     case 3:
//         console.log("3 nolu islem yapıldı");
//         break;
//     default:
//         console.log("İşlem yapılmadı");
//         break;
// }

// let time = new Date();

// hour = time.getHours();
// console.log(hour);
// switch (true) {
//     case (hour >=6 && hour <=12):
//         console.log("Günaydın");
//         break;
//         case (hour >=13 && hour <=17):
//             console.log("İyi Günler");
//             break;
//             case (hour >=18 && hour <=23):
//                 console.log("İyi Akşamlar");
//                 break;

//     default:
//         console.log("Yanlış zaman ");
//         break;
// }

// // Object Literals

// let veri;
// let user = {
//     userName : "hFurkan99",
//     firstName : "Furkan",
//     lastName : "Baltacı",
//     age : 24,
//     hobbies : ["futbol", "elektronik", "gitar", "müzik", "video oyunları"],
//     address : {
//         city : "Ankara",
//         country : "Türkiye",
//         phone : "05871456598",
//     }
// };

// veri = user;
// veri = user.address.city;
// veri = user.firstName;
// veri = user.hobbies.length;
// veri = user.age;
// veri = user.address.phone;
// veri = user.address.phone.length;

// console.log(veri);
// console.log(typeof veri);

// DÖNGÜLER


// let i = 0;

// while (i < 10) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// for (let a = 0; a <= 10 ; a++) {
//     if (a == 3) {
//         continue;
//     }
//     console.log(a);
// }

//  Dizi ve Objelerle Döngü Kullanımı

let cities = ["Ankara", "istanbul", "rize", "izmir", "samsun"];

// for (let index = 0; index < cities.length; index++) {
//     const element = cities[index];
//     console.log(index+1 + ". şehir : " + cities[index]);
    
// }

// // for-in metodu

// for(let i in cities){
//     console.log(`index: ${i} şehir: ${cities[i]}`);
// }


// foreach metodu

// cities.forEach(function (item) {
//     console.log(item);
// });

let users = [
    {firstName: "Hasan Furkan", lastName: "Baltacı", age:24},
    {firstName: "Begühan", lastName: "Kızılkan", age:23},
    {firstName: "Sude Nur", lastName: "Baltacı", age:21},
    {firstName: "Emre", lastName: "Baltacı", age:20},
]

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].firstName); 
//     console.log(users[i].age);       
// }

// for (const i in users) {
//     if (Object.hasOwnProperty.call(users, i)) {
//         const element = users[i].lastName;
//         console.log(`index: ${i} soyad: ${element}`);
//     }
// }

// users.forEach(function (item) {
//     console.log(item.firstName);

// });

//  MAP : returns an array

// let adSoyadDizisi = users.map(function (item) {
//     return item.firstName + " " + item.lastName;
// });
// console.log(adSoyadDizisi);    


// let numbers = [1, 3, 5, 9, 12];

// let kareleri = numbers.map(function(item){

//     return item*item;
// });

// console.log(kareleri);


// FONKSİYONLAR (functions)

//// parametre almayan ve değer döndürmeyen
// function merhaba() {
//     console.log("Merhaba");
// }

// merhaba();

////parametre alma
// function merhaba(name, age){
//     console.log(`isim : ${name} Yaş : ${age}`);
// }

// merhaba("Furkan", 23);

////parametre alma ve değer döndürme
//  function yasHesapla(dogumYili) {
//     return 2023 - dogumYili;
// }
// let ageFurkan = yasHesapla(1999);
// let ageBeguhan = yasHesapla(2000);
// let ageSude = yasHesapla(2002);
// let ageAlperen = yasHesapla(2012);

// console.log(ageFurkan);
// console.log(ageBeguhan);
// console.log(ageSude);
// console.log(ageAlperen);

// function ehliyetAlirMi(dogumYili, isim) {
//     let yas = yasHesapla(dogumYili);
//     let ehliyet = 18 - yas;
//     if (ehliyet > 0) {
//         console.log(`${isim} isimli kişinin ehliyet alabilmesine ${ehliyet} sene var`);
//     }
//     else{
//         console.log(isim + " isimli kişi " + yas + " yasşında olduğu için ehliyet alabilir");
//     }
// }

// ehliyetAlirMi(1999, "Furkan");
// ehliyetAlirMi(2012, "Alperen");

// window Objesi



// console.log(window);

// //alert

// alert("Merhaba");

// // prompt

// var veri = prompt("Adınızı giriniz");

// // confirm

// veri2 = confirm("Çıkmak istediğinizden emin misiz?");
// console.log(veri2);

// location

// veri = window.location;
// veri = window.location.href;
// veri = window.location.hostname;
// veri = window.location.protocol;

// window.location.href = "https://www.udemy.com";

// window.location.reload();

// window.navigator; // konsola yazılır
// window.document // konsola  html yapısına ulaşır

// console.log(veri);

//// SCOPE KAVRAMI


//Global Scope
// var veri1 = 5;
// let veri2 = 10;
// const veri3 = 15;



function a(){
    // Function Scope
}

if(true){
    // block scope
    // block içerisinde var değişkenini kullandıysak blok dışında da geçerliliğini sürdürür
    // blok içinde let ya da const ile tanımlanmış ise blok dışında tanımsız gözükür 
    // let ile var ın en temel farkı budur
    // bir değişkeni hem blok içinde hem deblok dışında kullanmak istiyorsak var değişkenini kullanırız
}

// var değişkeninin etkisi için scope örneği

// global olarak
var veri1 = 5;
let veri2 = 10;
const veri3 = 15;

if (true) {
    var veri1 = 30;
    let veri2 = 40;
    const veri3 = 50;

    console.log("Blok içindeki veri değerleri: " + veri1 + " " + veri2 + " " + veri3);
}

console.log("Blok dışındaki veri değerleri: " + veri1 + " "+ veri2 +" " +  veri3);
// örnektede göründüğü gibi; let ve const ile tanımlanan değişkenlerin değerleri block içinde yeniden atandığı halde blok dışında global olarak atandığı değerleri korurken, var ile tanımlanan değişkenin değeri blok içinde değişince blok dışında da değişmiş oluyor. 