/*
Логические операторы
В JavaScript есть четыре логических оператора: || (ИЛИ), && (И) и ! (НЕ), ?? (Оператор нулевого слияния). 
|| (ИЛИ)
Оператор «ИЛИ» выглядит как двойной символ вертикальной черты:

result = a || b;
Существует всего четыре возможные логические комбинации:

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
Как мы можем наблюдать, результат операций всегда равен true, за исключением случая, когда оба аргумента false.

ИЛИ «||» находит первое истинное значение

Расширенный алгоритм работает следующим образом.

При выполнении ИЛИ || с несколькими значениями:

result = value1 || value2 || value3;
Оператор || выполняет следующие действия:

Вычисляет операнды слева направо.
Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
Если все операнды являются ложными (false), возвращает последний из них.
Значение возвращается в исходном виде, без преобразования.

Другими словами, цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.
&& (И)
Оператор И пишется как два амперсанда &&:

result = a && b;
В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false:

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
И «&&» находит первое ложное значение
При нескольких подряд операторах И:

result = value1 && value2 && value3;
Оператор && выполняет следующие действия:

Вычисляет операнды слева направо.
Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
Если все операнды были истинными, возвращается последний.
Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.

Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.

Примеры:

// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


Приоритет оператора && больше, чем у ||
Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.

Таким образом, код a && b || c && d по существу такой же, как если бы выражения && были в круглых скобках: (a && b) || (c && d).
! (НЕ)
Оператор НЕ представлен восклицательным знаком !.

Синтаксис довольно прост:

result = !value;
Оператор принимает один аргумент и выполняет следующие действия:

Сначала приводит аргумент к логическому типу true/false.
Затем возвращает противоположное значение.
Например:

alert( !true ); // false
alert( !0 ); // true
В частности, двойное НЕ !! используют для преобразования значений к логическому типу:

alert( !!"non-empty string" ); // true
alert( !!null ); // false
То есть первое НЕ преобразует значение в логическое значение и возвращает обратное, а второе НЕ снова инвертирует его. В конце мы имеем простое преобразование значения в логическое.

Есть немного более подробный способ сделать то же самое – встроенная функция Boolean:
Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.
*/
// Что выведет alert (ИЛИ)?
// важность: 5
// Что выведет код ниже?

alert(null || 2 || undefined); // 2

// Что выведет alert (ИЛИ)?
// важность: 3
// Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); //1, 2

// Что выведет alert (И)?
// важность: 5
// Что выведет код ниже?

alert(1 && null && 2); //null

// Что выведет alert (И)?
// важность: 3
// Что выведет код ниже?

alert(alert(1) && alert(2)); //1

// Что выведет этот код?
// важность: 5
// Что выведет код ниже?

alert(null || 2 && 3 || 4); // Сперва будет выполнен 2 && 3 = 3. Затем null || 3 || 4 = 3

// Проверка значения из диапазона
// важность: 3
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
if (age >= 14 && age <= 90)


   // Проверка значения вне диапазона
   // важность: 3
   // Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

   // Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

   // Вариант 1
   let age;
if (age < 14 || age > 90) {
   alert("Не находится в диапазоне");
}

// Вариант 2
let age;
if (!(age >= 14 && age <= 90)) {
   alert("Не находится в диапазоне");
}

// Вопрос о "if"
// важность: 5
// Какие из перечисленных ниже alert выполнятся?

// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert('first'); // -1
if (-1 && 0) alert('second');// 0
if (null || -1 && 1) alert('third'); // 1

// Проверка логина
// важность: 3
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Блок-схема:


// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.

// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

// Решение
let login = prompt("Кто там?", "");
if (login == "Админ") {
   let password = prompt("Введите пароль");
   if (password == "Я главный") {
      alert("Здравствуйте!");
   } else if (password == null) {
      alert("Отменено");
   } else {
      alert("Неверный пароль");
   }
} else if (login == null) {
   alert("Отменено");
} else {
   alert("Я вас незнаю");
}

// Правильный ответ
// let login = prompt ("Кто там?", "");
// if (login === "Админ"){
// let password = prompt ("Введите пароль", "");
// if (password === "Я главный"){
// alert("Здравствуйте!");
// }else if (password == null || password == ""){
// alert("Отменено");
// }else {
// alert("Неверный пароль");
// }
// } else if (login === null || password == "") {
// alert("Отменено");
// }else {
// alert("Я вас незнаю");
// }
