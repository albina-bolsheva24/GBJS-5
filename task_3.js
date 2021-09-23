/*3 * Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру,
 например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми. */


var table = document.createElement('table');
var array = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
var number = ['', '1', '2', '3', '4', '5', '6', '7', '8', ''];
var reverseNumber = number.reverse();
var chessPieceWhite = ['', 'Л', 'К', 'С', 'Фз', 'Кр', 'С', 'К', 'Л'];
var chessPawnWhite = ['п'];
var chessPieceBlack = ['', 'Л', 'К', 'С', 'Фз', 'Кр', 'С', 'К', 'Л'];
var chessPawnBlack = ['п'];

function chessDesk() {
    for (var i = 0; i < 10; ++i) {
        var tr = document.createElement('tr');
        table.append(tr);
        for (var j = 0; j < 10; ++j) {
            var td = document.createElement('td');
            //td.style.fontSize = '80px';
            tr.append(td);
            td.innerHTML = (i + 1) + j;

            if (td.innerHTML % 2 == 0) {
                td.style.backgroundColor = "#8E3918";
            }

            if (i == 9 && 0 <= j <= 9) { // Последняя буквенная строка координат
                td.innerHTML = array[j];
            } else if (i == 0 && 0 <= j <= 9) { // Первая буквенная строка координат
                td.innerHTML = array[j];
            } else if (i <= 8 && j == 0) {//Левый цифровой столбец
                td.innerHTML = reverseNumber[i];
            } else if (i <= 8 && j == 9) {//Правый цифровой столбец
                td.innerHTML = reverseNumber[i];
            } else if (i == 1 && 1 <= j && j < 9) {
                td.innerHTML = chessPieceBlack[j];
            } else if (i == 2 && 1 <= j && j < 9) {
                td.innerHTML = chessPawnBlack;
            } else if (i == 7 && 1 <= j && j < 9) {
                td.innerHTML = chessPawnWhite;
                td.style.color = '#FAFAD2';
            } else if (i == 8 && 1 <= j && j < 9) {
                td.innerHTML = chessPieceWhite[j];
                td.style.color = '#FAFAD2';
            } else {
                td.innerHTML = '';
            }
        }
    }
    document.querySelector('div').append(table);
}
chessDesk();
