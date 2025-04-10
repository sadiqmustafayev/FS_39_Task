// 1. Faktorial

// `factorial(n)` funksiyasını tərtib edin. Bu funksiya qeyri-mənfi tam ədədin faktorialını hesablamalıdır.  
// _İpucu:_ Dövr və ya rekursiyadan istifadə edə bilərsiniz.

// **Nümunə:**

// ```js
// factorial(5); // 120
// ```

// function factorial(n) {
//   if (n < 0) {
//     return undefined
//   }
//   if (n === 0 || n === 1) {
//     return 1
//   }
//   return n * factorial(n - 1)
// }

// console.log(factorial(5));

// ---

// 2. İki Ədədin Maksimumunu Tapmaq

// İki ədəddən böyüyünü qaytaran `max(a, b)` funksiyasını yaradın.

// **Nümunə:**

// ```js
// max(10, 20); // 20
// ```

// function max(a, b) {
//   if (a > b) {
//     return a;
//   }else if (a < b){
//     return b
//   }else {
//     return "Ededler beraberdir";
//   }
// }

// console.log(max(10, 20));

// ---

// 3. Üstü Hesablamaq

// `power(base, exponent)` funksiyasını yaradın. Bu funksiya əsas ədədin qüvvətə yüksəldilmiş nəticəsini hesablamalıdır. `Math.pow` istifadə etməyin.

// **Nümunə:**

// ```js
// power(2, 3); // 8
// ```

// function power(base, exponent) {
//   let p = Math.pow(base, exponent)
//   return p
// }

// console.log(power(2, 3));

// ---

// 4. Palindrom Yoxlayıcı

// `isPalindrome(str)` funksiyasını yaradın. Əgər verilmiş sətir palindromdursa (yəni geriyə və irəli oxunuşu eynidirsə), `true`, əks halda `false` qaytarsın.

// **Nümunə:**

// ```js
// isPalindrome("racecar"); // true
// isPalindrome("hello"); // false
// ```

// const isPalindrome = (str) => {
//   let result = ""
//   for (let i = str.length -1; i >= 0; i--) {
//     result = result + str.charAt(i)
//   }
//   if (result === str) {
//     return true
//   }else{
//     return false
//   }
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));


// ---

// 5. Sətiri Tərsinə Çevirmək

// Verilmiş sətiri tərsinə çevirən `reverseString(str)` funksiyasını yaradın.

// **Nümunə:**

// ```js
// reverseString("JavaScript"); // "tpircSavaJ"
// ```

// function reverseString(str) {
//   let result = ""
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i]
//   }
//   return result
// }

// console.log(reverseString("JavaScript"));

// ---

// 6. N-ə Qədər Olan Ədədlərin Cəmi

// 1-dən `n`-ə qədər (daxil olmaqla) olan ədədlərin cəmini hesablayan `sumUpTo(n)` funksiyasını yaradın.

// **Nümunə:**

// ```js
// sumUpTo(5); // 15  (1+2+3+4+5 = 15)
// ```

// const sumUpTo = (n) =>{
//   let result = 0
//   for (let i = 1; i <= n; i++) {
//     result += i
//   }
//   console.log(result);
  
// }
// sumUpTo(5)

// ---

// 7. Selsidən Farenhayta Çevirici

// Verilmiş temperaturu selsidən farenhayta çevirən `celsiusToFahrenheit(celsius)` funksiyasını yaradın. Formula:  
// `F = C * (9/5) + 32`

// **Nümunə:**

// ```js
// celsiusToFahrenheit(0); // 32
// celsiusToFahrenheit(100); // 212
// ```

// const celsiusToFahrenheit = (celsuis) => {
//   const fahrenheit = celsuis * (9 / 5) + 32
//   console.log(fahrenheit);
  
// }
// celsiusToFahrenheit(0)
// celsiusToFahrenheit(100)

// ---

// 8. Dairənin Sahəsi

// Radiusu verilmiş dairənin sahəsini hesablayan `circleArea(radius)` funksiyasını yaradın. Formula:  
// `sahə = Math.PI * radius * radius`

// **Nümunə:**

// ```js
// circleArea(3); // Təxminən 28.274...
// ```

// function circleArea(radius) {
//   sahe = Math.PI * radius * radius
//   return sahe
// }

// console.log(circleArea(3));


// ---

// 9. Saitləri Silmək

// Verilmiş sətirdəki bütün saitləri (a, e, i, o, u – böyük və kiçik hərf fərqi olmadan) silən `removeVowels(str)` funksiyasını yaradın.

// **Nümunə:**

// ```js
// removeVowels("JavaScript"); // "JvScrpt"
// ```

// function removeVowels(str = "") {
//   let volwes = "a, E, i, u, o, A, E, I, U, O"
//   let result = ""

//   for (let i = 0; i < str.length; i++) {
//     if (volwes.includes(str.charAt(i)) === false) {
//       result = result + str[i]
//     }
//   }
//   console.log(result);
  
// }

// removeVowels("JavaScript")

// ---

// 10. İlk Hərfi Böyütmək

// Verilmiş sətirin yalnız ilk hərfini böyük edən `capitalize(str)` funksiyasını yaradın. Digər simvollar dəyişməz qalmalıdır.

// **Nümunə:**

// ```js
// capitalize("hello"); // "Hello"
// ```

// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1)
// }

// console.log(capitalize("hello"));


// ---

// 11. Rəqəmlərin Sayını Tapmaq

// Verilmiş qeyri-mənfi tam ədədin rəqəmlərinin sayını qaytaran `countDigits(n)` funksiyasını yaradın.

// **Nümunə:**

// ```js
// countDigits(12345); // 5
// ```

// function countDigits(params) {
//   params = params.toString();
//   let count = 0;

//   for (let i = 0; i < params.length; i++) {
//     if (isNaN(params[i]) === false) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countDigits(12345));      // 5
// console.log(countDigits("12345ajsa")); // 5


// ---

// 12. Rəqəmsal Kök Hesablamaq

// Verilmiş qeyri-mənfi tam ədədin rəqəmsal kökünü hesablayan `digitalRoot(n)` funksiyasını yaradın. Rəqəmsal kök, ədədin rəqəmləri toplanaraq birrəqəmli olana qədər təkrarlanır. Rekursiyadan istifadə edin.

// **Nümunə:**

// ```js
// digitalRoot(9875); // 2, çünki 9+8+7+5=29, sonra 2+9=11, sonra 1+1=2
// ```


// ---

// 13. Səciyyəvi Simvolun Sayını Tapmaq (Rekursiv)

// Verilmiş simvolun sətir içində neçə dəfə təkrarlandığını rekursiya ilə hesablayan `countChar(str, char)` funksiyasını yaradın. Simvola həssasdır (case-sensitive).

// **Nümunə:**

// ```js
// countChar("mississippi", "s"); // 4
// ```


// ---

// 14. Funksiya Kompozisiyası

// `compose(f, g)` adlı yüksək səviyyəli funksiya yaradın. Bu funksiya iki funksiyanı qəbul edir və `f(g(x))` qaytaran yeni bir funksiya döndərir.

// **Nümunə:**

// ```js
// const double = (x) => x * 2;
// const addThree = (x) => x + 3;
// const composed = compose(double, addThree);
// composed(4); // double(addThree(4)) = double(7) = 14
// ```


// ---

// 15. Currying Əlavə Etmə

// `curryAdd(a)` funksiyasını yaradın. Bu funksiya başqa bir funksiya qaytarmalıdır. Həmin funksiya `b` parametrini qəbul edib `a + b` nəticəsini qaytarmalıdır.

// **Nümunə:**

// ```js
// curryAdd(5)(10); // 15
// ```

// function curryAdd(a) {

// }

// function curryAdd(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// console.log(curryAdd(5)(10));

// ---

// 16. Mükəmməl Ədəd Yoxlayıcı

// Verilmiş müsbət tam ədədin mükəmməl ədəd olub-olmadığını yoxlayan `isPerfect(n)` funksiyasını yaradın. Mükəmməl ədəd özündən başqa bütün bölənlərinin cəminə bərabər olan ədəddir.

// **Nümunə:**

// ```js
// isPerfect(6); // true, çünki 1+2+3 = 6
// isPerfect(28); // true, çünki 1+2+4+7+14 = 28
// ```


// ---
