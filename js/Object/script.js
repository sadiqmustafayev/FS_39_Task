// Task-1

// Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, surname, gender, birthday). Konsola doğum tarixini çıxarın.

// let user = {
//   name : "Sadiq",
//   surname: "Mustafyev",
//   age: 20,
//   gender: "Men",
//   birtday: "02.02.2005",
// }

// console.log(user.name);
// console.log(user.surname);
// console.log(user.age);
// console.log(user.gender);
// console.log(user.birtday);


// Task-02

// Obyektə yaş (age) əlavə edin və doğum tarixini silin.İstifadəçi məlumatları olan bir obyekt verilib.Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.Alınmış obyekti konsola çıxarın.

// let user = {
//   age: 20,
//   birtday: "02.02.2005",
// }

// console.log(user.age);
// delete user.birtday


// Task - 03

// Object-i _key: value_ olaraq consolda göstərin. Məs:**

// **_name: Rasim_**<br>
// **_surname: Abbasov_**

// let user = {
//   name: "Sadiq",
//   surname: "Mustafayev",
// }

// console.log(`**_name: ${user.name}_**`);
// console.log(`**_surname: ${user.surname}_**`);


// Task-04

// Obyektə metodlar əlavə edin. Obyekt verilib. Ona növbəti metodları əlavə edin: _setAge()_ — istifadəçi yaşını dəyişdirən metoddur. _getYearsBeforeRetirement()_ — pensiyaya qədər istifadəçinin qalan illərinin sayını qaytaran metoddur.Bu metodları çağırın.**



// Task-05

//  _prop2Taker()_ adinda funksiya yaradin. Argument kimi obyekt alsin. Hemin obyektin 'prop-2' propertysinin value-nu cixarsin. Mes:**

// **_prop2Taker({ one: 1, 'prop-2': 2}) // 2_** <br>

// **_prop2Taker({ 'prop-2': 'two', prop: 'test'}) // 'two'_**

// function prop2Taker(obj) {
//   return obj['prop-2'];
// }

// console.log(prop2Taker({ one: 1, 'prop-2': 2 }));
// console.log(prop2Taker({ 'prop-2': 'two', prop: 'test' }));


// Task-06

// _propertyTaker()_ adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni cixarsin. Mes:**

// **_propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent') // 'Asia'_** <br>

// **_propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country') // 'Sweden'_**

// **_propertyTaker({name:'ali', age:12}, 'name') // 'ali'_**

// function propertyTaker(obj, propertyName) {
//   return obj[propertyName];
// }

// console.log(propertyTaker({ continent: 'Asia', country: 'Japan' }, 'continent')); 
// console.log(propertyTaker({ country: 'Sweden', continent: 'Europe' }, 'country')); 
// console.log(propertyTaker({ name: 'ali', age: 12 }, 'name'));                      


// Task-07

// _existsAndTruthy()_ adinda funksiya yaradin. 2 ədəd argument alır: obyekt(obj) ve string (propertyName). Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes,**

// **_existsAndTruthy({a:1,b:2,c:3},'b') // true_**

// **_existsAndTruthy({x:'a',y:null,z:'c'},'y') //_**<br>
// _false (obyektde 'y' var amma falsy-di ona gore false)_

// **_existsAndTruthy({x:'a',b:'b',z:undefined},'z') // false_**
// _(obyektde 'z' yoxdu ona gore false)_


// function existsAndTruthy(obj, propertyName) {
//   return !!obj[propertyName];
// }

// console.log(existsAndTruthy({a:1,b:2,c:3},'b'))
// console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y'))
// console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z'))
