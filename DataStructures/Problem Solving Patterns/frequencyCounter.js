function validAnagram(str1, str2) {
  //Stringlerin uzunluğunu karşılaştır
  if (str1.length !== str2.length) {
    return false;
  }

  //Stringlerdeki karakterleri ve sıklıklarını bir objede tut
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //Döngü ile stringlerin karakterlerine ulaş ve karakterleri sıklıklarıyla birlikte objelere ekle
  for (const char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (const char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  //Stringlerin içindeki karakterlerin herbirinden kaçar tane var
  //İlk stringin herhangi bir karakteri ikinci stringde var mı
  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
  //Var ise aynı sıklıkta mı var
}

// Fonksiyon iki adet string alacak ve birbirlerinin anagramları ise true döndürecek. Aynı harfleri aynı sıklıkta içermeli.

// girdi olarak: iki adet string (sadece küçük harfler)
//çıktı : true / false

console.log(validAnagram("anagram", "nagaram")); // true
// validAnagram("car", "cat"); // false

//Diğer çözüm

function validAnagram2(str1, str2) {
  //Stringlerin uzunluğunu karşılaştır
  if (str1.length !== str2.length) {
    return false;
  }
  //Birinci stringdeki karakterleri ve sıklıklarını bir objede tut
  let frequencyCounter = {};

  for (const char of str1) {
    frequencyCounter[char]
      ? ++frequencyCounter[char]
      : (frequencyCounter[char] = 1);
  }

  //İkinci stringdeki harfler objenin içerisinde var mı ve aynı miktarda mı
  for (const char of str2) {
    if (!frequencyCounter[char]) {
      return false;
    } else {
      frequencyCounter[char] -= 1; // varsa eşleşme sonucu bir miktarı çıkarılmalı ki ikinci stringde daha fazla o karakterden varsa doğru kabul edilmesin
    }
  }
  return true;
}

console.log(validAnagram2("ffurkanav", "furkavfan"));
