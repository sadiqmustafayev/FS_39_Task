// HTML KOD

// ```javascript
// <h1>GeForce 20</h1>
// <ul>
//   <li>GTX 1650</li>
//   <li>GTX 1660</li>
//   <li class="primary">GTX 1660 Ti</li>
//   <li>RTX 2070</li>
//   <li>RTX 2080</li>
//   <li class="primary">RTX 2080 Ti</li>
// </ul>
// ```

// Task 1

// Siyahının ilk elementini konsola çıxarın.

// console.log(document.body.children[0]);


// Task 2

// Yalnız JS-kodundan istifadə edərək dəyişklik edin:

// - Başlığı silin;
// - Siyahının sonuna mətn ilə yeni bir bölmə `TITAN RTX` əlavə edin .
  

// Task 3

// Yalnız JS-kodundan istifadə edərək dəyişklik edin:

// - başlıq mətnini `GeForce 20 Series`-a;
// - fon rəngi stili primary klası olan elementləri `#ebebeb` rənginə dəyişdirin.

// const heading = document.querySelector('h1'); 
// if (heading) {
//   heading.textContent = 'GeForce 20 Series';
// }

// const primaryElements = document.querySelectorAll('.primary');
// primaryElements.forEach(elem => {
//   elem.style.backgroundColor = '#ebebeb';
// });


// Task 4

// Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın.

// const primaryElements = document.querySelectorAll('.primary');
// console.log(primaryElements);


//  Task 5

// Yalnız JS kodundan istifadə edərək sinifləri dəyişdirin:

// - bütün siyahı elementlərinə item sinifi əlavə edin;
// - siyahıda primary sinfi olmayan elementlərə secondary sinfi əlavə edin.

// const listItems = document.querySelectorAll('li');

// listItems.forEach(item => {
//   item.classList.add('item');

//   if (!item.classList.contains('primary')) {
//     item.classList.add('secondary'); 
//   }
// });