// Task 1

// İstifadəçidən imtahan nəticəsini daxil etməsini bildirin. Yığdığı imtahan balına görə uyğun mesajı konsola çıxarın. Qiymətləndirmə aşağıdakı sistemə görə olunacaqdır:

// İstifadəçidən imtahan nəticəsini daxil etməsini bildirin(0-100 arasında). Yığdığı imtahan balına görə, 90 və yuxarı üçün “`A`”, 80-89 üçün “`B`”, 70-79 üçün “`C`”, 60-69 üçün “`D`”, 60-dan aşağı olanlar üçün “`F`” ilə qiymət verin.

// - 85-dən yuxarı - əla
// - 50-85 aralığı - yaxşı
// - 50-dən aşağı - kərs

// let score = +prompt("Imtahan Neticenizi Daxil Edin: ")

// if (score >= 90 && score <= 100) {
//     console.log("Qiymət: A - Əla");
// } else if (score >= 80 && score < 90) {
//     console.log("Qiymət: B - Yaxşı");
// } else if (score >= 70 && score < 80) {
//     console.log("Qiymət: C - Yaxşı");
// } else if (score >= 60 && score < 70) {
//     console.log("Qiymət: D - Orta");
// } else if (score >= 0 && score < 60) {
//     console.log("Qiymət: F - Kəsildiniz");
// } else {
//     console.log("Yanlış dəyər daxil edilib.");
// }


// Task 2

// İstifadəçidən havanın tempraturunu daxil etməsini istəyin. İstifadəçinin daxil etdiyi dəyərə əsasən havanın necə olması barədə ona məlumat verin.

// - 25-dən yuxarı - isti
// - 10-25 aralığı - normal
// - 0-10 aralığı - soyuq
// - 0-dan aşağı - şaxta

// let temprature = +prompt("Hava Tempraturunu Daxil Edin: ")

// if (temprature > 25) {
//   console.log("Hava Istidi");
// } else if (temprature >= 10 && temprature <= 25) {
//   console.log("Hava Normaldi");
// } else if (temprature >= 0 && temprature < 10) {
//   console.log("Hava Soyuqdu");
// } else if (temprature < 0) {
//   console.log("Hava Saxtadi");
// } else {
//   console.log("Reqemi duzgun yaz");
// }

// Task 3

// İstifadəçidən bir rəqəm alın. Rəqəmin tək və ya cüt olduğunu müəyyən edib konsolda göstərin.

//# Qeyd: Tək və cüt ədədlər ədədlər nəzəriyyəsində ədədin 2-yə tam və ya qalıqla bölünməsi ilə müəyyən olunur. Tək ədədlər 2-yə bölünməyən tam ədədlərə deyilir. Cüt ədədlər isə 2-yə qalıqsız bölünən tam ədədlərə deyilir. Tərifdən də göründüyü kimi tək və cüt ədədlər tam ədədlərdir. Ona görə də tək və cüt ədədlər mənfi, sıfır və müsbət ola bilər.

// let num = 4

// if (num % 2 === 0){
//   console.log("Eded Cutdur");
// }else {
//   console.log("Eded tekdir"); 
// }


// Task 4

// Fərqli dəyişənlərdə istifadəçi adı(`username`) və şifrə(`password`) məlumatlarını saxlayın. İstifadəçidən 2 ayrı `propmt()` funksiyası vasitəsilə istifadəçi adı və şifrə məlumatlarını alın. Əvvəlcədən yazmış olduğunuz məlumatlarla qarşılarşdırdıqdan sonra məlumatların doğru və ya yalnış olması ilə bağlı mesajı konsolda göstərin.

// let correctname = "sadiq"
// let correctpassword = "password111" 

// let username = prompt("Username")
// let password = prompt("Password")

// if (username === correctname && password === correctpassword){
//   console.log("Dorgudur");
// }else{
//   console.log("Yalnisdi");
  
// }