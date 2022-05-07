/*
Конструкция "switch"
Конструкция switch заменяет собой сразу несколько if.

Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.

Синтаксис
Конструкция switch имеет один или более блок case и необязательный блок default.

Выглядит она так:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
Если ни один case не совпал – выполняется (если есть) вариант default.
*/

// Задачи
// Задача 1
/*
Напишите "if", аналогичный "switch"
важность: 5
Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/
if (browser == "Edge") {
   alert("You've got the Edge!");
} else if (browser == "Chrome"
   || browser == "Firefox"
   || browser == "Safari"
   || browser == "Opera") {
   alert('Okay we support these browsers too');
} else {
   alert('We hope that this page looks ok!');
}

// Задача 2
/*
Переписать условия "if" на "switch"
важность: 4
Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/
const number = +prompt("Введите число между 0 и 3", "");
switch (number) {
   case 0:
      alert("Вы ввели число 0");
      break;
   case 1:
      alert("Вы ввели число 1");
      break;
   case 2:
   case 3:
      alert("Вы ввели число 2, а может и 3");
      break;
}