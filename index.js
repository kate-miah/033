//1 Площа квадрата
//  function getSquareOfSquare (a) {
//     return a*a;
//  }

 //2 Квадратне рівняння

//  function getRoots(a, b, c) {
//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//         console.log('Невірні вхідні дані)');
//         return false
//     }
//     let d = b**2 -4*a*c;
//     if (d<0) {
//         console.log('Рівняння не має коренівє');
//     } else if (d===0) {
//         let x = -b /(2*a);
//         console.log('Рівняння має корінь '+ x);
//     } else {
//         let x1 = (-b + Math.sqrt())/(2*a);
//         let x2 = (-b - Math.sqrt())/(2*a);
//         console.log('x1 = '+x1);
//         console.log('x2 = ' +x2);
//     }
//  }

 //3 Menu

//  function getMenu() {
//     let userOption = prompt('Виберіть напій:\n1-Juice\n2-Water\3-Tea');
//     switch(userOption) {
//         case '1': {
//             alert('Ви вибрали сік')
//             break;
//         }
//         case '2': {
//             alert('Ви вибрали воду')
//             break;
//         }
//         case '3': {
//             alert('Ви вибрали чай')
//             break;
//         }
//         case null:
//         case '': 
//         { 
//             alert('Ви нічого не обрали');
//         }
//         default: {
//             alert('Такого напою немає')
//         }
//     }
//  }

//  //4 
//  function monthOfYear() {
//     let month = prompt('Введіть номер місяця')
//     switch(month) {
//         case '1':
//         case '2':
//         case '12':
//             {
//                 alert("Winter");
//                 break;
//             }
//         case '3':
//         case '4':
//         case '5':
//             {
//                 alert('Spring');
//                 break;
//             }
//         case '6':
//         case '7':
//         case '8':
//             {
//                 alert('Summer');
//                 break;
//             }
//         case '9':
//         case '10':
//         case '11':
//             {
//                 alert('Autumn');
//                 break;
//             }
//         case null:
//         case '': 
//             { 
//                 alert('Ви нічого не обрали');
//                 break;
//             }
//         default: {
//             alert('Такого місяца немає')
//              }
//     }
//  }

//  function sum(num5, num6) { //Детермінована функція // Чиста функція
//     return num5+num6;
//  }
 
//  function getRandom () { //Не детермінована
//     return Math.random();
//  }

//  function mulyply(num7,num8) { //Детермінована, але має "побічний ефект"
//     let res = num7*num8;
//     console.log('Result = ', res);
//     return res;
//  }

//  let value=7; //Глобальна змінна

//  function logger() { //Локальна областьвидимості
//     let value ='a';  // Локальна змінна
//     console.log(value);
//  }

//  function anotherFun() { // Використається глобальна змінна
//     console.log(value);
//  }
//  logger();

 //Цикли

//  while (2+2===4) {           //буде безкінечний цикл
//     console.log(true);
//  }

//  let counter = 0;
//  while (counter < 4) {
//     console.log(true);
//     counter++;
//  }

//  let counter1 = 4;
//  while (counter1 > 0) {
//     console.log(counter1);
//     counter1--;
//  }

//   let counter2 = 0;
//  while (counter2 < 5) {
//     console.log(counter2);
//     counter2++;
//  }

// let goodPassword = 'qwerty';

//  while (true) {
//     let userInput = prompt('Введіть пароль');
//     if (userInput === goodPassword) {
//         ok();
//         break; //якщо так- більше запитувати не треба
//     }
//     alert('Неправильний пароль')
//  }


/*
let attempts = 0;

 while (true) {
    let userInput = prompt('Введіть пароль');
    if (userInput === goodPassword) {
        ok();
        break; //якщо так- більше запитувати не треба
    }
    attempts++;
    if(attempts >= 3) {
      console.log('Спробуйти ще раз завтра');
      break;
    }
    alert('Неправильний пароль');
 }
 
function ok() {
     console.log('Це був правильний пароль, тепер ми вас пустимо у кабінет')
 }

 */

//  let counter3 = 0;
//  while (counter3 <= 3) {
//     console.log(counter3);
//     counter3++;
//  }

//  let counter4 = 4;
//  do {
//     console.log(counter4);
//     counter4++;
//  } while (counter4 <= 3);


//  for (let counter5 = 0; counter5 <=3; counter5++) {
//     console.log(counter5);
//  }


// let number = 4;
// let res = 1;
//  for (let counter = 0; counter < 5; counter++) {
//     res = res * number;
//  }

let factNumber = 5;
let result = 1;

for (let counter = 1; counter <= factNumber ; counter++) {
    result *= counter;
}