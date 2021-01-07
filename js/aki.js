// 1. Что такое переменные?
// 2. Что значит типы данных
// 3. Сколько типов данных есть в JS?

// let name = 'Атай'; // 1.string
// let number = 2; // 2.number
// let pustoy; // 3.undefined
// let filledWithSpace = null; // 4.null
// let person = {
//   // 5.object
//   name: 'Руслан',
//   surname: 'Белоусов',
//   age: 20,
//   abilities: 'Повар',
//   email: 'ruslan@gmail.com',
//   address: 'Кызыл - Аскер',
// };
// let names = ['Атай', 'Роман', 'Аки', 'Аэлина', ' Руслан']; // 6.array

// let boolena = true; // 7.boolean

// console.log(boolena);

let atai = document.querySelector('.burger__menu');
let aelina = document.querySelector('.nav');

atai.addEventListener('click', function () {
  atai.classList.toggle('is-active');
  aelina.classList.toggle('is-active');
});
console.log(atai);
