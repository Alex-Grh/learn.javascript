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

// Есть доступ к внешним переменным и может их менять.
*/
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
}