
//! конкретный пример
/*
let sum = function(a, b) {
   return a + b
};
*/
/*
let sum = (a, b) => a + b;
alert(sum(1, 2));
//! Если аргументов нет, круглые скобки будут пустыми, но они должны присутствовать:
let sayHi = () => alert("Hello");
sayHi();

//! Например, для динамического создания функции
let age = prompt("Skolko vam let", 18);
let wrlcome = (age < 18) ?
() => alert("Privet") :
() => alert("Zdravste");
wrelcome();

//! Многострочные стрелочные функции
let sum = (a, b) => {
   let result = a + b;
   return result;
};
alert( sum(1, 2));

//! Задачи
/*
Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:
*/
/*
function ask (question, yes, no) {
   if (confirm(guestion)) yes()
   alse no();
}
ask(
   "Вы согласны? ",
   function() { alert("Вы согласились.");},
   function() { alert("Вы отменили выполнение.");}
);
*/
*/
function ask (question, yes, no) {
   if (confirm(question)) yes()
   alse no();
}
ask(
   "Вы согласны? ",
   () => alert("Вы согласились.")
   () => alert("Вы отменили выполнение.")
);