// ! можем скопировать функцию в другую переменную:
function sayHi() {
   alert("Privet");
}
let func = sayHi;
func();
sayHi();

//! Функции-«колбэки»
function ask(question, yes, no) {
   if (confirm(question)) yes()
   else no();
}
function showOk() {
alert("Vi soglasni");
}
function showCancel() {
   alert("Vi otmenili");
}
ask("Vi siglas", showOk, showCancel);

//! Что можно сделать, чтобы welcome была видима снаружи if?
let age = prompt("Skolko let", 18);
let welcome;
if (age < 18) {
   welcome = function() {
      alert("Privet");
   };
} else {
   welcome = function() {
alert("Zdraste");
   };
}
welcome();