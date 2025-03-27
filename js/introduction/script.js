// Task 1
// Konsola mesaj verin: «My name is Muard».

// console.log("My name is Sadiq");


// Task 2

// Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin. Bu dəyişənin dəyərini konsolda göstərin.

// let name = "Sadiq"
// console.log(`My name is ${name}`);


// Task 3

//  Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin. Birdən çox variant seçin.

// - 2user
// - c@rd
// - person
// - title color
// - console
// - $add

// let person = "John"; 
// let $add = 5;        

// console.log(person); 
// console.log($add);   


// Task 4

// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində və depodaki kitab sayı bookAmount dəyişənində saxlanılır.Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.

// ```javascript
// let bookPrice = 750;
// let bookAmount = 14;
// ```

// let bookPrice = 750;
// let bookAmount = 14;
// let totalPrice = bookPrice * bookAmount

// console.log(`Umumi deyeri ${totalPrice}`);


// Task 5

// `kmhSpeed` ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə» dəyərini saxlayır. `msSpeed` ​​dəyişəni təyin edin və ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın. `msSpeed` dəyişəninin dəyərini konsola çıxarın.



// Task 6

// İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı günlərin sayını göstərən proqram yazın.

// let birthday = prompt("Doğum tarixinizi daxil edin:");
// let birthDate = new Date(birthday);
// let today = new Date();
// let diffInTime = today - birthDate;

// let daysLived = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
// alert("Siz bu günə qədər " + daysLived + " gun yasamisiz.");


// Task 7

// `num` dəyişənində iki rəqəmli ədəd saxlanılır. Konsola çıxaran belə proqram yazın:

// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını.

// let num = 12**5
// let num2 = num % 3
// console.log(num);
// console.log(num2);


// Task 8

// `firstName` dəyişənində istifadəçinin adı, `lastName` — dəyişənində isə soyadı saxlanır. Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”

// ```javascript
// let firstName = "Alan";
// let lastName = "Turing";
// ```

// let firstName = "Alan";
// let lastName = "Turing";

// console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`);


// Task 9

// `fullName` dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.

// ```javascript
// let fullName = "John Doe";
// ```

// let fullName = "John Doe"
// console.log("Heriflerin sayi:", fullName.length);


// Task 10

// İstifadəçinin adını və soyadını boşluqlarla ayıraraq `fullName` dəyişəninə yazın. `fullName` dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini konsola çıxaran proqram yazın.

// let firstName = "Sadiq"
// let lastName = "Mustafayev"
// let fullName = firstName + " " + lastName
// let first= firstName[0] + lastName[0]

// console.log("Baş hərflər:", first);


// Task 11

// İstifadəçidən adını daxil etməsini istəyin. Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// let name = "Sadiq"
// console.log(`Salam, ${name}!`);


// Task 12

// İstifadəçidən iki ayrı `prompt` əmri ilə iki ədəd daxil etməsini istəyin. Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.

// num1 = +prompt("Birinci Eded: ")
// num2 = +prompt("Ikinci Eded: ")

// console.log(`Cixma ${num1 - num2}`);
// console.log(`Plus ${num1 + num2}`);
// console.log(`Vurma ${num1 * num2}`);
// console.log(`Bolme ${num1 / num2}`);


// Task 13

// `12345` və `98765` ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın.


// Task 14

// İstifadəçidən soyad, ad və ata adını istəyən, soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.<br> Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.»

// let fullName = prompt("Adinizi Daxil Edin: ")

// let nameParts = fullName.split(" ");
// let surname = nameParts[0];
// let firstName = nameParts[1];
// let fatherName = nameParts[2];
// let total = firstName[0] + "." + fatherName[0] + ".";

// console.log(surname + " " + total);


// Task 15

// Proqram istifadəçidən əmanətin məbləğini, müddətini və faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.

// Task 16

// Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın. Əks halda «Access granted» bildirişini çıxarın.

// let age = 17
// if(age < 18){
//   console.log("Access denied");
// }else{
//   console.log("Access granted");
// }


// Task 17

// İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.


// Task 18

// `if...else` operatoru ilə yazllmış kodu `switch` operatoruna dəyişdirməklə kodu yenidən yazın.

// ```javascript
// let id = prompt("enter product id:");
// if (id === "1") {
//   alert("Available 10 pcs.");
// } else if (id === "2") {
//   alert("Available 256 pcs.");
// } else if (id === "3") {
//   alert("Available 53 pcs.");
// } else if (id === "4") {
//   alert("There are 3 available.");
// } else {
//   alert("Out of stock");
// }
// ```

// let id = +prompt("enter product id:");

// switch (id) {
//   case 1:
//     console.log("Available 10 pcs.");
//     break;
//   case 2:
//     console.log("Available 256 pcs.");
//     break;
//   case 3:
//     console.log("Available 53 pcs.");
//     break;
//   case 4:
//     console.log("There are 3 available.");
//     break;
//   default:
//     console.log("Out of stock");
//     break;
// }


// Task 19

// İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın.

// const userInput = +prompt("Ay daxil et")

// switch (userInput) {
//   case 1:
//     console.log("Yanvar");
//     break
//   case 2:
//     console.log("Fevral");
//     break
//   case 3:
//     console.log("Mart");
//     break
//   case 4:
//     console.log("Aprel");
//     break
//   case 5:
//     console.log("May");
//     break
//   case 6:
//     console.log("Iyun");
//     break
//   case 7:
//     console.log("Iyul");
//     break
//   case 8:
//     console.log("Avqust");
//     break
//   case 9:
//     console.log("Sentyabr");
//     break
//   case 10:
//     console.log("Oktyabr");
//     break
//   case 11:
//     console.log("Noyabr");
//     break
//   case 12:
//     console.log("Dekabr");
//     break
//   default:
//     console.log("Dogru reqem daxil edin");
//     break
// }

// Task 20

// İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın.Daxil edilmiş dəyərə validator əlavə edin. İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

// let userInput = prompt("Tarixi daxil edin «YYYY.MM.DD»")
