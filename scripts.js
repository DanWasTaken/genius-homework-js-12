// 1 Завдання
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// const printNumbersTimeout = (from, to) => {
//   console.log(from);
//   from = from + 1;

//   if (from <= to) {
//     setTimeout(() => {
//       printNumbersTimeout(from, to);
//     }, 1000);
//   } else { console.log ('кінець') };
// }

// printNumbersTimeout(1, 5);

// const printNumbersInterval = (from, to) => {
//   const counter = setInterval(() => {
//     console.log(from);
//     from < to ? from++ : clearInterval(counter);
//   }, 1000);
// }

// printNumbersInterval(1, 5);


// 2 Завдання
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:

// function delay(ms) {
//   // ваш код
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms)
//   })
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));