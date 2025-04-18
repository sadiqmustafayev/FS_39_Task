// Task 1

// `text` dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın. Boşluq herf olaraq sayılmır.

// ```js
// let text = "John Doe"; // 7
// let text1 = "A beautiful game"; // 14
// ```

// let text = "John Doe"; // 7
// let text1 = "A beautiful game"; // 14

// let letter = text1.replace(/\s/g, "").length;
// console.log(letter);


// Task 2

// İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin. İstifadəçidən tam adı `«AD SOYAD»` formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni `«SOYAD AD»` formatında çıxarın.

// fullName = "Sadiq Mustafayev"
// console.log(fullName.replace("Sadiq Mustafayev", "Mustafayev Sadiq"));

// Task 3

// `16792` və `5437` ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın

// let result = 16792 * 5437

// console.log(result.toString().charAt(5));

// Task 4

// İstifadəçidən `«530.90»` formatında qiymət daxil etməyi xahiş edən və qiyməti `«530 manat 90 qəpik»` formatında konsola çıxaran proqram tərtib edin.

// let price = prompt("Qiyməti daxil edin");
// let parts = price.trim().split(".");

// if (parts.length === 2) {
//   let manat = parts[0];
//   let qepik = parts[1];
//   console.log(`${manat} manat ${qepik} qəpik`);
// } else {
//   console.log("Qiyməti düzgün formatda daxil edin: «530.90»");
// }

// Task 5

// İstifadəçidən soyad, ad və ata adını istəyən, soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.Məsələn, `Məmmədov Ramil Qurban` — `Məmmədov R.Q`.

// function formatText(text = "") {
//   const surname = text.slice(0, text.indexOf(" "))
//   const name = text.slice(text.indexOf(" ") + 1, text.lastIndexOf(" "))
//   const fatherName = text.slice(text.lastIndexOf(" ")+1)
  
//   return `${surname} ${name[0]}. ${fatherName[0]}`
// }

// console.log(formatText("Mustafayev Sadiq Ebulfet"));


// Task 6 - ?

// İstifadəçidən tarixi `«YYYY.MM.DD»`(Məs., 2019.05.12) formatında daxil etməyi xahiş edin. Tarixin təsvirini `«12 may 2019»` formatında çıxarın. Daxil edilmiş dəyərə validator əlavə edin. İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.


// Task 7

// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin. Funksiya sonda "."-in yerləşdiyi indeksi geri döndürsün.

// function noqde(text) {
//   return text.indexOf(".");
// }

// let text = "Sadiq . Mustafayev";
// let index = noqde(sampleText);
// console.log(index); 

// Task 8

// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.

// let num = +prompt("Reqem daxil edin: ")

// if (num) {
//   console.log("Reqem Var");
  
// } else {
//   console.log("Reqem Yoxdu");
  
// }

// Task 9

// `repeatedSymbolCounter(string, char)` adında funksiyası yazın. Funksiya sizdən mətn və bir hərf alsın. Hərfin mətndə neçə dəfə istifadə olunduğunu tapın.

// ```js
// repeatedSymbolCounter("success", "c"); // 2
// ```

// function repeatedSymbolCounter(string, char) {
//   let count = 0;
  
//   for (let c of string) {
//     if (c === char) {
//       count++;
//     }
//   }
  
//   return count;
// }

// console.log(repeatedSymbolCounter("success", "c")); // 2

// Task 10

// `capitalize(str)` funksiyası təyin edin. Daxil edilən mətnin ilk hərfini böyük digərlərini kiçik olacaq şəkildə geri döndürsün.

// ```js
// capitalize("lOreM"); // "Lorem"
// ```

// function capitalize(str) {
//   if (!str) return ""; 

//   return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// console.log(capitalize("lOreM")); // "Lorem"

// Task 11

// `snakeToKebab(str)` funksiyası təyin edin. Daxil edilən mətni `SNAKE_CASE`-dən `kabab_case`-ə çevirib qaytarsın .

// ```js
// capitalize("BU_TEST_UCUNDUR"); // "bu-test-ucundur"
// ```

// function snakeToKebab(str) {
//   return str.toLowerCase().replace(/_/g, "-");
// }

// console.log(snakeToKebab("BU_TEST_UCUNDUR")); // "bu-test-ucundur"

// Task 12

// `changeFirstWord(word, firstLetter)` funksiyası təyin edin. Daxil edilən mətnin ilk hərfini dəyişdirib geri döndürsün.

// ```js
// changeFirstWord("Kamil", "R"); // "Ramil"
// ```

// let str = "Kamil"

// console.log(str.replace("K", "R"));

// Task 13

// `removeCharacterFromString(word)` funksiyası təyin edin. Daxil edilən mətnin ilk hərfini silib geri döndürsün.

// ```js
// removeCharacterFromString("Loremn ipsum dolar sit amet"); // "orem ipsum dolar sit amet"
// ```

// function removeCharacterFromString(word) {
//   return word.slice(1);

// }

// console.log( removeCharacterFromString("Loremn ipsum dolar sit amet"));

// Task 14 - ?

// `checkIsEmail(email)` funksiyası təyin edin. Funksiyaya göndərilən dəyirin email olub olmadığını yoxlamalıdır. Göndərilən dəyərin email olması üçün içərisində "." olmalı, sonu isə "@email.com", "@outlook.com", "@mail.ru", "@yahoo.com", "@yandex.com" kimi dəyərlərdən biri ilə bitməlidir.

// ```js
// removeCharacterFromString("Loremn ipsum dolar sit amet"); // "orem ipsum dolar sit amet"
// ```

// function checkIsEmail(email) {
//   const emailName = [
//     "@email.com",
//     "@outlook.com",
//     "@mail.ru",
//     "@yahoo.com",
//     "@yandex.com"
//   ]

//   if (emailName === true) {
//     return true
//   } else {
//     return false
  
//   }
// }

// console.log(checkIsEmail("sadiq@mail.ru"));
