/*
Оператор нулевого слияния (??)
Оператор нулевого слияния представляет собой два вопросительных знака ??.

Так как он обрабатывает null и undefined одинаковым образом, то для этой статьи мы введём специальный термин. Для краткости будем говорить, что значение «определено», если оно не равняется ни null, ни undefined.

Результат выражения a ?? b будет следующим:

если a определено, то a,
если a не определено, то b.
Иначе говоря, оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.
С другой стороны, сравнительно недавно в язык был добавлен оператор нулевого слияния ?? – как раз потому, что многие были недовольны оператором ||.

Важное различие между ними заключается в том, что:

|| возвращает первое истинное значение.
?? возвращает первое определённое значение.
Проще говоря, оператор || не различает false, 0, пустую строку "" и null/undefined. Для него они все одинаковы, т.е. являются ложными значениями. Если первым аргументом для оператора || будет любое из перечисленных значений, то в качестве результата мы получим второй аргумент.

Однако на практике часто требуется использовать значение по умолчанию только тогда, когда переменная является null/undefined. Ведь именно тогда значение действительно неизвестно/не определено.
*/