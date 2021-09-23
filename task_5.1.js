/* 1 Создать функцию, генерирующую шахматную доску. 
Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/


var table = document.createElement('table');
var array = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
var number = ['', '1', '2', '3', '4', '5', '6', '7', '8', ''];
var reverseNumber = number.reverse();

function chessDesk() {
    for (var i = 0; i < 10; ++i) {
        var tr = document.createElement('tr');
        table.append(tr);
        for (var j = 0; j < 10; ++j) {
            var td = document.createElement('td');
            tr.append(td);
            td.innerHTML = (i + 1) + j;

            if (td.innerHTML % 2 == 0) {
                td.style.backgroundColor = "#8E3918";//Закрашивание темных ячеек
            }

            if (i == 9 && 0 <= j <= 9) { // Последняя буквенная строка координат
                td.innerHTML = array[j];
            } else if (i == 0 && 0 <= j <= 9) { // Первая буквенная строка координат
                td.innerHTML = array[j];
            } else if (i <= 8 && j == 0) {//Левый цифровой столбец
                td.innerHTML = reverseNumber[i];
            } else if (i <= 8 && j == 9) {//Правый цифровой столбец
                td.innerHTML = reverseNumber[i];
            } else {
                td.innerHTML = '';
            }
        }
    }
    document.querySelector('div').append(table);
}
chessDesk();


