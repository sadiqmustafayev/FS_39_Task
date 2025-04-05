// Task 1:

// **logGreeting() adında funksiya tərtib edin. Funksiya name adında parametr qəbul etsin və konsola «[name] is a JS developer» mesajı çıxarsın.**

// function logGreeting(name) {
//   return `${name} is a JS developer`
// }

// console.log(logGreeting("Sadiq"));


// Task 2:

// **İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.Funksiyanı 3 müxtəlif ad üçün çağırın.**

// function showActiveUser(username) {
//   console.log(`${username} is active now`);
// }

// showActiveUser("Elvin");
// showActiveUser("Nigar");
// showActiveUser("Sadiq");


// Task 3:

// **Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.Fərqli arqumentlərlə funksiyanı üç dəfə çağırın və fərqli arqumentlər göndərək test edin.**

// function params(a, b, c) {
//   let max = Math.max(a, b, c)
//   console.log(`En boyuk eded: ${max}`);
// }

// params(10, 25, 7);    
// params(100, 50, 75);  
// params(-5, -2, -10);  


// Task 4:

// **Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin cəmin rublla göstərən funksiya yazın.<br> Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.Bir dollar üçün məzənnə 75 rubl təşkil edir. Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.**

// function valyuta(rubl, dollar) {
  
// }


// Task 5:

// **Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() adında funksiyası tərtib edin.**

// function params(a, b, c) {
//   let min = Math.min(a, b, c)
//   console.log(`En kicik eded: ${min}`);
// }

// params(10, 25, 7)   
// params(100, 50, 75)


// Task 6:

// **Parametr olaraq 2 fərqli mətn qəbul edən və onları birləşdirib geri döndürən `concatenateStrings()` adında funskiya yazın**

// function concatenateStrings() {
//   let str1 = "Salam"
//   let str2 = "Netersen"
//   console.log(str1, str2);
  
// }

// concatenateStrings()


// Task 7:

// **Parametr kimi _length_ və _width_ dəyərlərini alan və həmin parametrlərə görə kvadratın sahəsini hesablayıb consola çıxaran `calculateRectangleArea()` funksiyası yazı**

// function calculateRectangleArea(length, width) {
//   let area = length * width;
//   console.log(`Result: ${area}`);
// }

// calculateRectangleArea(5, 10);


// Task 8:

// **Bir ədədi parametr kimi qəbul edən və onun cüt olub olmadığını yoxlayan `isEven()` adlı funksiya yazın. Rəqəmin cüt olub olmadığını göstərən bir mesajı konsolda göstərin.**

// function isEven(num) {
//   if(num % 2 === 0){
//     console.log("Eded Cutdur");
    
//   }else{
//     console.log("Eded Tekdir");
    
//   }
// }
// isEven(4)


// Task 9:

// **Müsbət tam ədədi parametr kimi qəbul edən və onun sadə ədəd olub-olmadığını yoxlayan `isPrime()` adlı funksiya yazın. Əgər ədəd sadədirsə funksiya _true_, əks halda _false_ qaytarır.**


// function isPrime(number) {
//   if (number <= 1) return false
//   if (number === 2) return true 
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }


// console.log(isPrime(2));
