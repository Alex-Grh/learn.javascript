/*
Циклы while и for
*/
/*
Цикл «while»
Цикл while имеет следующий синтаксис:

while (condition) {
  // код
  // также называемый "телом цикла"
}

Цикл «for»
Более сложный, но при этом самый распространённый цикл — цикл for.

Выглядит он так:

for (начало; условие; шаг) {
  // ... тело цикла ...
}
Давайте разберёмся, что означает каждая часть, на примере. Цикл ниже выполняет alert(i) для i от 0 до (но не включая) 3:

for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}
Рассмотрим конструкцию for подробней:

часть		
начало	let i = 0	Выполняется один раз при входе в цикл
условие	i < 3	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
тело	alert(i)	Выполняется снова и снова, пока условие вычисляется в true.
шаг	i++	Выполняется после тела цикла на каждой итерации перед проверкой условия.

Метки для break/continue
Нам нужен способ остановить выполнение если пользователь отменит ввод.

Обычный break после input лишь прервёт внутренний цикл, но этого недостаточно. Достичь желаемого поведения можно с помощью меток.

Метка имеет вид идентификатора с двоеточием перед циклом:

labelName: for (...) {
  ...
}

*/
//! Задача 1
// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
   alert(i--);
} // Ответ 1 (Почему 3 - i = 2 (true) - i = 1 (true)  - i = 0 (false) остановка вывод 1 (true)


//! Задача 2
/*
Какие значения выведет цикл while?
важность: 4
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выводят alert с одинаковыми значениями или нет?
*/
// Префиксный вариант ++i:
// Первое значение: i = 1, так как операция ++i сначала увеличит i, а потом уже произойдёт сравнение и выполнение alert.

// Далее 2, 3, 4… Значения выводятся одно за другим. Для каждого значения сначала происходит увеличение, а потом – сравнение, так как ++ стоит перед переменной.

// При i = 4 произойдёт увеличение i до 5, а потом сравнение while (5 < 5) – это неверно. Поэтому на этом цикл остановится, и значение 5 выведено не будет.

let i = 0;
while (++i < 5) alert(i); //От 1 до 4

// Постфиксный вариант i++
// Первое значение: i = 1. Остановимся на нём подробнее. Оператор i++ увеличивает i, возвращая старое значение, так что в сравнении i++ < 5 будет участвовать старое i = 0.

// Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 1.

// Далее 2, 3, 4… Для каждого значения сначала происходит сравнение, а потом – увеличение, и затем срабатывание alert.

// Окончание цикла: при i = 4 произойдёт сравнение while (4 < 5) – верно, после этого сработает i++, увеличив i до 5, так что значение 5 будет выведено. Оно станет последним.

// Значение i = 5 последнее, потому что на следующем шаге while (5 < 5) ложно.

let i = 0;
while (i++ < 5) alert(i);

//! Задача 3

// Какие значения выведет цикл for?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:

for (let i = 0; i < 5; i++) alert(i);


// Префиксная форма:

for (let i = 0; i < 5; ++i) alert(i);

// Ответ: от 0 до 4 в обоих случаях.

// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 5; i++) alert( i );
// Такой результат обусловлен алгоритмом работы for:

// Выполнить единожды присваивание i = 0 перед чем-либо (начало).
// Проверить условие i < 5
// Если true – выполнить тело цикла alert(i), и затем i++
// Увеличение i++ выполняется отдельно от проверки условия (2), значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i.

//! Задача 4
// Выведите чётные числа
// важность: 5
// При помощи цикла for выведите чётные числа от 2 до 10.
// Четные числа
for (let i = 2; i <= 10; i++) {
   if (i % 2 == 0) {
      alert(i);
   }
}
// Нечетные числа
for (let i = 2; i < 10; i++) {
   if (i % 2 == 0) continue;
   alert(i);
}

//! Задача 5
/*
Замените for на while
важность: 5
Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let i = 0;
while (i < 3) {
   alert( `number ${i}!` );
   i++;
} 
//! Задача 6
/*
Повторять цикл, пока ввод неверен
важность: 5
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/
let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// Цикл do..while повторяется, пока верны две проверки:

// Проверка num <= 100 – то есть, введённое число всё ещё меньше 100.
// Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''. В этом случае цикл while тоже нужно прекратить.
// Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима.

//! Задача 7
/*
Вывести простые числа
важность: 3
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.

решение
Существует множество алгоритмов решения этой задачи.

Давайте воспользуемся вложенными циклами:

Для всех i от 1 до 10 {
  проверить, делится ли число i на какое-либо из чисел до него
  если делится, то это i не подходит, берём следующее
  если не делится, то i - простое число
}
Решение с использованием метки:
*/
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}
// Конечно же, его можно оптимизировать с точки зрения производительности. Например, проверять все j не от 2 до i, а от 2 до квадратного корня из i. А для очень больших чисел – существуют более эффективные специализированные алгоритмы проверки простоты числа, например квадратичное решето и решето числового поля.
