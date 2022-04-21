/*
// Вызов функции
function showMessage () {
   alert ("Vsem privet");
}
showMessage();

// Локальные переменные. Переменные внутри функции

function showMessage () {
   let message = "Priver";
   alert (message);
}
showMessage ();
alert (message);
*/
/*
// Внешние переменные. 
let userName1 = "Vasia";
function showMessage () {
   let message1 = "Privet" + userName1;
   alert (message1);
}
showMessage ();

// !Есть доступ к внешним переменным и может их менять.
*/
/*
let userName = "Vasia";
function showMessage() {
   userName = "Petia";
   let message = "Privet" + userName;
   alert (message);
}
alert (userName);
showMessage();
alert(userName);
*/
function showMessage (from, text) {
   console.log(from + ": " + text);
}
showMessage("Ania", "Privet");
showMessage("Ania", "Kak dela");

//! Параметры
function showMessage (from, text) {
   alert(from + ":" + text);
}
showMessage ("Ania", "Privet");
showMessage ("Ania", "Kak dela");


//!у нас есть переменная from, и мы передаём её функции
function showMessage(from, text) {

   from = "*" + from + "*";
   alert(from + ":" + text);
}
let from = "Ania";
showMessage (from, "Priv");
alert(from);

//! Параметры по умолчанию
function showMessage(from, text="text po umolsh") {
   alert(from + ":" + text);
}
showMessage("Ania");

//! Возврат значения

function sum (a, b) {
   return a + b;
}
let result = sum(1, 2);
alert(result);

//! Вызовов return может быть несколько
function checkAge(age) {
   if (age > 18) {
      return true;
   }else {
      return confirm("A rod raz")        
      }
}
ler age = prompt("Skolko", 18);
if (checkAge(age)) {
   alert("Dostup poluchen");
}else {
   alert("Dostup zakrit");
}

//! Функция min(a, b)
function min(a, b) {
   if (a < b) {
      return a;
    } else {
      return b;
    } 
}

//! Функция pow(x,n)
function pow(x, n) {
   let result = x;
   for (let i = 1; i<n; i++){
      result *=x;
   }
   return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
if (n<1) {
   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}