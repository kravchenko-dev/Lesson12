
//                         -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// function printNumbers(from, to) {
//     let present = from;
  
//     let timerId = setInterval(function() {
//         console.log(present);

//       if (present === to) {
//         clearInterval(timerId);
//       }
//       present++;
      
//     }, 1000);
//   }
  
//   printNumbers(1, 5);

  function printNumbers(from, to) {
    let present = from;
  
    setTimeout(function go() {
        console.log(present);

      if (present < to) {
        setTimeout(go, 1000);
      }
      present++;
      
    }, 1000);
  }
  
  printNumbers(1, 5);

//                             -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:


function delay(ms) {
// ваш код
return new Promise(resolve => setTimeout(resolve, ms));

}delay(3000).then(() => alert('виконалось через 3 секунди'));