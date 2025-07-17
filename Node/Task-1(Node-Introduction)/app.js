// ## 🧪 Node.js Giriş Tapşırıqları

// 📄 Tapşırıq 1 – Faylın Məzmununu Oxumaq

// **Təsvir:**
// `.txt` faylını oxumaq üçün aşağıdakı əmri işlədin:

// ```bash
// node app.js open test.txt
// ```

// Bu əmrlə `test.txt` faylının məzmunu terminalda göstəriləcək.

// import { readFile } from 'fs/promises';

// const args = process.argv;
// const command = args[2];
// const fileName = args[3];

// if (command === "open") {
//   try {
//     const data = await readFile(fileName, 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error("Fayl oxunarkən xəta baş verdi:", err.message);
//   }
// }

// ---

// ✍️ Tapşırıq 2 – Fayla Yazmaq

// **Təsvir:**
// İstifadəçi tərəfindən daxil edilən mətni `.txt` faylına əlavə etmək üçün aşağıdakı əmri işlədin:

// ```bash
// node app.js write test.txt "Bu yeni mətndir."
// ```
// import { writeFile } from 'fs/promises';

// const args = process.argv;

// const command = args[2];
// const fileName = args[3];

// if (command === "write") {
//   const data = args.slice(4).join(" ") + "\n";

//   try {
//     await writeFile(fileName, data, 'utf-8');
//     console.log(`✅ '${fileName}' fayilina yazildi:\n${data}`);
//   } catch (err) {
//     console.error("❌ Yazma zamani xəta:", err.message);
//   }
// }

// ---

// 🧮 Tapşırıq 3 – Hesablama Nəticəsini Fayla Yazmaq --- ?

// **Təsvir:**
// Terminalda aşağıdakı əmri işlədin:

// ```bash
// node app.js 5 * 6
// ```

// Bu əmrlə `hesablamalar.txt` faylına `5 * 6 = 30` yazılacaq. Hər yeni əməliyyat əvvəlki nəticələri silmədən fayla əlavə ediləcək.

// import { appendFile } from 'fs/promises';

// const args = process.argv;

// const command = args[2];
// const fileName = "hesablamalar.txt";

// if (command === "append") {
//   const data = args.slice(4).join(" ") + "\n";
  
//   try {
//     await appendFile(fileName, data, 'utf-8');
//     console.log(`✅ '${fileName}' fayilina yazildi:\n${data}`);
//   } catch (err) {
//     console.error("❌ Yazma zamani xəta:", err.message);
//   }
// }

// ---

// 🔍 Tapşırıq 4 – Cümlədə Sözün Təkrarlanmasını Saymaq -- ?

// **Təsvir:**
// Terminalda aşağıdakı əmri işlədin:

// ```bash
// node app.js test "ali buradadır, ali bunu etdi"
// ```

// Bu əmrlə `"ali"` sözünün cümlədə neçə dəfə təkrarlanması sayılacaq və nəticə göstəriləcək.

// import { readFile } from 'fs/promises';

// async function main() {
//   const args = process.argv.slice(2); 

//   const command = args[0];

//   if (command === "open") {
//     const fileName = args[1];
//     if (!fileName) {
//       return;
//     }

//     try {
//       const data = await readFile(fileName, 'utf-8');
//       console.log(data);
//     } catch (err) {
//       console.error("Fayl oxunarkən xəta baş verdi:", err.message);
//     }
//   } else if (args.length >= 2) {
//     const wordToFind = args[0];
//     const sentence = args.slice(1).join(' ');

//     const regex = new RegExp(`\\b${wordToFind}\\b`, 'gi');
//     const matches = sentence.match(regex);
//     const count = matches ? matches.length : 0;

//     console.log(`"${wordToFind}" sözü cümlədə ${count} dəfə təkrarlanır.`);
//   }
// }

// main();

// ---

// 📚 Tapşırıq 5 – Verilən Sözün Cümlədə Təkrarlanma Sayını Tapmaq  -- ?

// **Təsvir:**
// Terminalda aşağıdakı əmri işlədin:

// ```bash
// node app.js test "bu bir testdir, testlər maraqlıdır"
// ```

// Bu əmrlə `"test"` sözünün cümlədə neçə dəfə təkrarlanması sayılacaq və nəticə göstəriləcək.

// ---

// 🧾 Tapşırıq 6 – Komanda Arqümentlərini Çap Etmək

// **Təsvir:**
// Terminalda aşağıdakı əmri işlədin:

// ```bash
// node app.js hello
// ```

// Bu əmrlə `hello` arqumenti terminalda çap ediləcək.

// const args = process.argv.slice(2); 

// if (args.length === 0) {
//   console.log("Zehmet olmasa bir arqument verin.");
// } else {
//   console.log(args[0]);
// }

// ---

// 🗣️ Tapşırıq 7 – Bir neçə Arqümenti Cümlə Halında Birleştirmək

// **Təsvir:**
// Terminalda aşağıdakı əmri işlədin:

// ```bash
// node app.js bu bir testdir
// ```

// Bu əmrlə `bu bir testdir` cümləsi terminalda çap ediləcək.

// const args = process.argv.slice(2); 

// if (args.length === 0) {
//   console.log("Zehmet olmasa bir cumle verin.");
// } else {
//   const sentence = args.join(" ");
//   console.log(sentence);
// }

// ---

// 📄 Tapşırıq 8 – JSON Faylı ilə İşləmək

// **Təsvir:**
// `data.json` faylını oxumaq və onun məzmununu terminalda göstərmək üçün aşağıdakı əmri işlədin:

// ```bash
// node app.js read data.json
// ```

// Bu əmrlə `data.json` faylının məzmunu terminalda göstəriləcək.

// import { readFile } from 'fs/promises';

// const args = process.argv;
// const command = args[2];
// const fileName = args[3];

// if (command === "read") {
//   try {
//     const fileContent = await readFile(fileName, "utf-8");
//     const data = JSON.parse(fileContent);
//     console.log(data);
//   } catch (error) {
//     console.error("Xəta baş verdi:", error.message);
//   }
// }

// ---

// 🧮 Tapşırıq 9 – Əsas Kalkulyator

// **Təsvir:**
// Terminalda aşağıdakı əmri işlədin:

// ```bash
// node app.js 10 + 5
// ```

// Bu əmrlə `10 + 5 = 15` nəticəsi terminalda göstəriləcək.

// const args = process.argv;

// const num1 = Number(args[2]);
// const operator = args[3];
// const num2 = Number(args[4]);

// if (operator !== '+') {
//   console.log("Yalniz toplama emeliyati (+) dəstəklənir.");
//   process.exit(1);
// }

// const result = num1 + num2;
// console.log(`${num1} + ${num2} = ${result}`);

// ---

// 📂 Tapşırıq 10 – Xətaları Fayla Yazmaq  ---- ?

// **Təsvir:**
// Xətaları `error.log` faylına yazmaq üçün aşağıdakı əmri işlədin:

// ```bash
// node app.js error
// ```

// Bu əmrlə baş verən xəta `error.log` faylına yazılacaq.

// ---

// 🧩 "Process" ilə Əlaqəli Tapşırıqlar

// 🧬 Tapşırıq 11 – Prosess Məlumatlarını Çap Etmək

// **Təsvir:**
// Cari prosessin məlumatlarını terminalda göstərmək üçün aşağıdakı əmri işlədin:

// ```bash
// node app.js process
// ```

// Bu əmrlə prosessin ID-si və istifadə olunan Node.js versiyası terminalda göstəriləcək.

// const args = process.argv;
// const command = args[2];

// if (command === "process") {
//   console.log("Proses ID-si:", process.pid);
//   console.log("Node.js versiyasi:", process.version);
// }

// ---

// 🧾 Tapşırıq 12 – Komanda Arqümentlərini Çap Etmək

// **Təsvir:**
// Komanda arqümentlərini terminalda göstərmək üçün aşağıdakı əmri işlədin:

// ```bash
// node app.js argv
// ```

// Bu əmrlə `process.argv` siyahısı terminalda göstəriləcək.

// const args = process.argv;
// const command = args[2];

// if (command === "argv") {
//   console.log("Proses argv", process.argv);
// }

// ---

// 🚪 Tapşırıq 13 – Prosess Çıxışını İzləmək

// **Təsvir:**
// Prosessin çıxışını izləmək üçün aşağıdakı əmri işlədin:

// ```bash
// node app.js exit
// ```

// Bu əmrlə prosessin çıxışı izləniləcək və uyğun mesaj göstəriləcək.

// const args = process.argv;
// const command = args[2];

// if (command === "exit") {
//   console.log("Proses dayandirilir...");
//   process.exit(0);
// }

