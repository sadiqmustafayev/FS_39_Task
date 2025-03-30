// Task 1

// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın. Son dəyəri konsola çıxarın.

// num = +prompt("2 Reqemli Eded Daxil Edin: ")

// while (num < 100) {
//   num += 7;
// }

// console.log("Son dəyər:", num);


// Task 2

// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın. Proqram N ədədini istifadəçidən soruşur.

// let N = +prompt("Neçə dəfə çap etmək istəyirsiniz?", 10);

// for (let i = 0; i < N; i++) {
//     console.log("I know how to use cycles");
// }


// Task 3

// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// for (let i = 100; i < 1000; i += 10) {
//   console.log(i);
// }


// Task 4

// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// let sum = 0;

// for (let i = 11; i < 100; i += 2) {
//     sum += i;
// }

// console.log(sum);


// Task 5

// Proqram istifadəçidən ədəd daxil etməyi xahiş edir. Bundan sonra proqram konsolda bu rəqəmin bölünəni olan bütün üçrəqəmli ədədlərin cəmini çıxarır.

// let number = +prompt("Bir ədəd daxil edin:", 10)
// let sum = 0

// for (let i = 100; i < 1000; i++) {
//     if (i % number === 0) {
//         sum += i;
//     }
// }

// console.log(sum);


// Task 6

// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın. «23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.

// Task 7

// For dövrün köməyi ilə 10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin. Alınan dəyəri konsola çıxarın.

// let sum = 1

// for (let i = 1; i < 11; i++) {
//     sum *= i
// }

// console.log(sum);


// Task 8

// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.


// Task 9

// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// let text = prompt("Bir mətn daxil edin:");

// let index = text.indexOf(".");

// if (index !== -1) {
//     console.log("Mətndə \".\" simvolu ilk dəfə " + index + " indeksində yerləşir.");
// } else {
//     console.log("Mətndə \".\" simvolu yoxdur.");
// }


// Task 10

// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.

// ask = prompt("Metn Daxil Et: ")
// result = Number("")

// for (let i = 0; i < 6; i++) {
  
// }


// Task 11

// 1-dən 100-ə qədər olan tək ədədləri toplayın və nəticəni göstərin.

// let sum = 0;

// for (let i = 1; i <= 100; i += 2) {
//     sum += i;
// }

// console.log(sum);


// Task 12

// İstifadəçiyə soruşun: "Hər hansı bir söz yazın" və daxil edilən sözdə hər bir hərfi konsolda ayrı-ayrı göstərin.

// word = prompt("Soz Daxil Edin: ")

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }


// Task 13

// İstifadəçiydən bir ədəd daxil etməsini istəyin və daxil edilən rəqəmin faktorialını tapın.
