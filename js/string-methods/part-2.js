// Tapşırıq 1 - ?

// Bir DNT zəncirinin bir tərəfi verilir. Hər bir hərfin qarşılığını taparaq yeni bir zəncir düzəldin:

// - "A" ↔ "T"
// - "C" ↔ "G"

// Nümunələr:

// ```
// "ATTGC"  →  "TAACG"
// "GTAT"   →  "CATA"
// ```


// ---

// Tapşırıq 2

// Verilmiş bir mətn və bir simvol var. Mətnin bütün simvollarını həmin simvolla əvəz edin. Əgər mətn və ya simvol boşdursa, boş sətir qaytarın.

// Nümunə:

// ```
// mətn = "abc"
// simvol = "z"
// nəticə = "zzz"
// ```

// function simvolReturn(mətn, simvol, nəticə) {
//   mətn = ""
//   simvol = ""
//   return mətn.replace(`${simvol}`)
// }

// console.log(simvolReturn("abc", "z"));

// function evezEt(metn, simvol) {
//   if (!metn || !simvol) {
//     return "";
//   }
//   return simvol.repeat(metn.length);
// }

// console.log(evezEt("abc", "z"));

// ---

// Tapşırıq 3 - ?

// Verilmiş mətndəki bütün rəqəmləri çıxarın və onları birləşdirərək ədədə çevirin.

// Nümunə:

// ```
// "hell5o wor6ld"  →  56
// ```


// ---

// Tapşırıq 4

// Verilmiş cümlədəki bütün nida (!) işarələrini silin, amma cümlənin sonuna bir nida işarəsi əlavə edin.

// Nümunələr:

// ```
// "Hi!"       →  "Hi!"
// "Hi!!!"     →  "Hi!"
// "!Hi"       →  "Hi!"
// "!Hi!"      →  "Hi!"
// "Hi! Hi!"   →  "Hi Hi!"
// "Hi"        →  "Hi!"
// ```

// function nidaDuzelt(cumle) {
//   if (!cumle) {
//     return "!";
//   }
//   cumle = cumle.replace(/!/g, '');
//   return cumle + "!";
// }

// console.log(nidaDuzelt("!Hi!"));

// ---

// Tapşırıq 5 - ?

// Verilmiş mətndəki bütün rəqəmləri silin. Digər simvollar, o cümlədən boşluqlar və xüsusi işarələr (məsələn, ~#$%^&!@\*():;"'.,?) olduğu kimi qalmalıdır.

// Nümunələr:

// ```
// "! !"               →  "! !"
// "123456789"         →  ""
// "This looks5 grea8t!" →  "This looks great!"
// ```

// ---

// Tapşırıq 6

// Verilmiş bir ədədə əsasən, 1 və 0-lardan ibarət növbəli bir sətir yaradın. Sətir 1 ilə başlamalıdır.

// Nümunələr:

// ```
// 6  →  "101010"
// 4  →  "1010"
// 12 →  "101010101010"
// ```

// function strr(uzunluq) {
//   let setir = '';
//   for (let i = 0; i < uzunluq; i++) {
//     setir += i % 2 === 0 ? '1' : '0';
//   }
//   return setir;
// }

// console.log(strr(6)); 
// console.log(strr(5)); 

// ---

// Tapşırıq 7

// Verilmiş bir sətirin bütün hərflərinin böyük olub-olmadığını yoxlayın. Əgər hamısı böyükdürsə, `true`, əks halda `false` qaytarın.

// Nümunələr:

// ```
// "c"                     →  false
// "C"                     →  true
// "hello I AM DONALD"     →  false
// "HELLO I AM DONALD"     →  true
// "ACSKLDFJSgSKLDFJSKLDFJ" →  false
// "ACSKLDFJSGSKLDFJSKLDFJ" →  true
// ```

// function cevir(metn) {
//   return metn === metn.toUpperCase();
// }

// console.log(cevir("hello I AM DONALD"));
// console.log(cevir("C"));

// ---

// Tapşırıq 8

// Verilmiş bir ədəd və bir sətirə əsasən, həmin sətiri ədəd qədər təkrarlayaraq yeni bir sətir yaradın.

// Nümunələr:

// ```
// 6, "I"      →  "IIIIII"
// 2, "Hello"  →  "HelloHello"
// ```

// function tekrar(eded, setir) {
//   return setir.repeat(eded);
// }

// console.log(tekrar(6, "I"));
// console.log(tekrar(2, "Hello"));

// ---

// Tapşırıq 9

// Verilmiş bir sətiri tərsinə çevirin.

// Nümunələr:

// ```
// "world"  →  "dlrow"
// "word"   →  "drow"
// ```

// function cumleniTersineCevir(cumle) {
//   return cumle.split('').reverse().join('');
// }

// console.log(cumleniTersineCevir("world"));
// console.log(cumleniTersineCevir("word")); 


// ---

// Tapşırıq 10

// Verilmiş bir sətirdəki bütün boşluqları silin və nəticəni qaytarın.

// Nümunələr:

// ```
// "Lorem ipsum dolar sit"  →  "Loremipsumdolarsit"
// "8aaaaa dddd r     "     →  "8aaaaaddddr"
// ```

// function bosluqSil(str = "") {
//   str = str.replaceAll(" ", "")
//   return str
// }

// console.log(bosluqSil("Lorem ipsum dolar sit"));

// ---

// Tapşırıq 11: Sıxılmış Sətiri Açın - ?

// Verilmiş sıxılmış formatda olan bir sətiri açın. Sıxılmış formatda hərflər və onların təkrarlanma sayları verilir.

// Nümunə:

// ```
// Input: "a2b3"
// Output: "aabbb"
// ```

// ---

// Tapşırıq 12: Sətirdəki Bütün Permutasiyaları Tapın - ?

// Verilmiş bir sətirin bütün mümkün permutasiyalarını tapın və qaytarın.

// Nümunə:

// ```
// Input: "abc"
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
// ```


// ---

// Tapşırıq 13: Sətirdəki Simvolların Tezliyinə Görə Sıralayın

// Verilmiş bir sətirdəki simvolları onların tezliyinə görə azalan sırada sıralayın.

// Nümunə:

// ```
// Input: "tree"
// Output: "eert"
// ```

// function tersineCevir(metn) {
//   return metn.split('').reverse().join('');
// }

// console.log(tersineCevir("tree"));

// ---

// Tapşırıq 14: Sətirdəki Rəqəmləri Toplayın

// Verilmiş bir sətirdəki bütün rəqəmləri tapın və onların cəmini qaytarın.

// Nümunə:

// ```
// Input: "a1b2c3"
// Output: 6
// ```

// function reqemleriTopla(metn) {
//   let cem = 0;
//   for (let simvol of metn) {
//     if (!isNaN(simvol) && simvol !== ' ') {
//       cem += Number(simvol);
//     }
//   }
//   return cem;
// }

// console.log(reqemleriTopla("a1b2c3")); 

// ---

// Tapşırıq 15: Sətirdəki Sözləri Tərsinə Çevirin

// Verilmiş bir cümlədəki sözlərin sırasını tərsinə çevirin.

// Nümunə:

// ```
// Input: "The sky is blue"
// Output: "blue is sky The"
// ```

// function tersineCevir(metn) {
//   return metn.split('').reverse().join('');
// }

// console.log(tersineCevir("The sky is blue"));
