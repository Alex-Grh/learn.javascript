/*
alert
С этой функцией мы уже знакомы. Она показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».

Например:

alert("Hello");

prompt
Функция prompt принимает два аргумента:

result = prompt(title, [default]);
Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

title
Текст для отображения в окне.
default
Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.
*/
let age = prompt("Сколько вам лет", 18);
alert(`Tebe ${age} let`);