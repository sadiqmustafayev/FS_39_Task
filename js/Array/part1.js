// Task 1

// Üç qrup yoldaşının adlarından ibarət massiv yaradın; Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin; İlk adı silin; Massivi konsola çıxarın.

// ```
// Nümunə:
// Input: ["Əli", "Tahir", "Aytən"]
// Əlavə ediləcək ad: "Sabir"
// Output: ["Tahir", "Aytən", "Sabir"]
// ```

// let group = ["Əli", "Tahir", "Aytən"]
// group.push("Sabir")
// group.shift()
// console.log(group);

// ---

// Task 2

// Üç addan ibarət massiv yaradın. Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin. Massivi konsola çıxarın.

// ```
// Nümunə:
// Input: ["Əli", "Tahir", "Aytən"]
// Output: ["Əli", "Classified", "Aytən"]
// ```

// let str = ["Əli", "Tahir", "Aytən"]
// str[1] = "Classified"
// console.log(str);

// ---

// Task 3

// 5 rəqəmdən ibarət massiv yaradın. Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın. Orijinal massivin dəyişmədiyini yoxlayın.

// ```
// Nümunə:
// Input: [1, 2, 3, 4, 5]
// Output (Yeni massiv): [2, 4, 6, 8, 10]
// Output (Orijinal massiv): [1, 2, 3, 4, 5]
// ```

// let original = [1, 2, 3, 4, 5];

// let copy = [...original]; 
// let doubled = copy.map(num => num * 2);

// console.log("Yeni massiv:", doubled);
// console.log("Orijinal massiv:", original);

// ---

// Task 4

// Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın. Massiv elementlərin düzün.

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

// - Episode 4: New Hope
// - Episode 5: The Empire Strikes Back
// - Episode 6: Return of the Jdi

// ```
// Nümunə:
// Input: ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi']
// Output:
// Episode 4: New Hope
// Episode 5: The Empire Strikes Back
// Episode 6: Return of the Jdi
// ```

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// arr[0] = "Episode 4: New Hope"
// arr[1] = "Episode 5: The Empire Strikes Back"
// arr[2] = "Episode 6: Return of the Jdi"
// console.log(arr);

// ---

// Task 5

// İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın. İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massilə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.

// ```
// Nümunə:
// Input: "5,3,8,1,4"
// Output: 1
// ```

// function MinElement(...number) {
//   const minValue = Math.min(...number)
//   console.log(minValue);
  
// }

// MinElement(5,3,8,1,4)

// ---

// Task 6

// Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin. '32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden sitifade ederek)

// ```
// Nümunə:
// Input: "32, 31, 34, 36, 31"
// Output: "32; 31; 34; 36; 31"
// ```

// let num = "32, 31, 34, 36, 31"

// let del = num.split(",");

// let newNum = del.join(";");

// console.log(newNum);

// ---

// Task 7

// 1-dən 10-a qədər olan rəqəmlərdən ibarət massiv yaradın. Massivin yalnız cüt ədədlərini konsola çıxarın.**

// ```
// Nümunə:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 4, 6, 8, 10]
// ```

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNum = num.filter(num => num % 2 === 0)
// console.log(newNum);

// ---

// Task 8

// İki massivi birləşdirin: biri qrup yoldaşlarının adlarından, digəri isə onların yaşlarından ibarət olsun. Son nəticəni konsola çıxarın.

// ```
// Nümunə:
// Input: ["Əli", "Tahir"], [20, 21]
// Output: ["Əli", "Tahir", 20, 21]
// ```

// let name = ["Əli", "Tahir"]
// let age = [20, 21]
// let letter = name.concat(age)
// console.log(letter);

// ---

// Task 9

// Massivdəki ən böyük və ən kiçik elementin fərqini tapın. Nəticəni konsola çıxarın

// ```
// Nümunə:
// Input: [5, 8, 3, 12, 6]
// Output: 9
// ```

// function sum(...number) {
//   const maxValue = Math.max(...number)
//   const minValue = Math.min(...number)
//   const sum = maxValue - minValue
//   console.log(sum);
  
// }

// sum(5, 8, 3, 12, 6)

// ---

// Task 10

// Bir sözlər massivindəki bütün sözləri böyük hərflərlə yazın və konsola çıxarın

// ```
// Nümunə:
// Input: ["alma", "armud", "heyva"]
// Output: ["ALMA", "ARMUD", "HEYVA"]
// ```

// let fruit = ["alma", "armud", "heyva"]
// let str = fruit.map(f => f.toUpperCase())
// console.log(str);

// ---

// Task 11 - ?

// Verilmiş ədədlər massivindəki mənfi ədədləri 0 ilə əvəz edin və nəticəni konsola çıxarın.

// ```
// Nümunə:
// Input: [3, -1, 5, -7, 2]
// Output: [3, 0, 5, 0, 2]
// ```


// ---

// Task 12

// Verilmiş ədədlər massivindəki ədədlərin cəmini hesablayın və nəticəni konsola çıxarın

// ```
// Nümunə:
// Input: [1, 2, 3, 4, 5]
// Output: 15

// function sum(...numbers) {
//   let result = 0

//   for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i]
//     result += num
//   }
//   console.log(result);
  
// }

// sum(1, 2, 3, 4, 5)