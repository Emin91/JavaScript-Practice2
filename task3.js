//Написать функцию, которая принимает строку (Rock, Paper или Scissors), рандомно сама генерирует один из этих вариантов и возвращает в ответ следующую строку: “Player selected Scissors. CPU selected Rock. CPU won”. Если выбор пал на одинаковые строки, то строка должна быть следующей: “Player and CPU both selected Paper. Friendship won”. Игра камень ножницы бумага
//rps("Rock") ➞ “Player selected Rock. CPU selected Scissors. Player won”
//rps("Paper") ➞ “Player selected Paper. CPU selected Scissors. CPU won”
//rps("Rock") ➞ “Player and CPU both selected Rock. Friendship won”

function rps (playerNumber) {
const randomNumber = Math.floor((Math.random() * 3) + 1);
    console.log(randomNumber);
if (randomNumber == 1) {
 if (playerNumber == 1) {
        alert("Player and CPU both selected Rock. Friendship won!");
} else if (playerNumber == 2) {
            alert("Player selected Paper. CPU selected Rock. Player won");
 } else {
       alert("Player selected Scissors. CPU selected Rock. Player won");
        }
    }
if (randomNumber == 3) {

if (playerNumber == 3) {

 alert("Player selected Rock. CPU selected Paper. CPU won");
} 
else if (playerNumber == 2) {
alert("Player and CPU both selected Paper. Friendship won!");
        } 
        else {
 alert("Player selected Scissors. CPU selected Paper. Player won");
        }
    }

    if (randomNumber == 3) {
        if (playerNumber == 1) {
            alert("Player selected Rock. CPU selected Scissors. Player won");
        } else if (playerNumber == 2) {
            alert("Player selected Paper. CPU selected Scissors. Player won");
        } else {
            alert("Player and CPU both selected Scissors. Friendship won!");
        }
    }
}
let playerNumber = Number(prompt("Please choose number between 1 and 3: Rock  Paper Scissors "));
rps(playerNumber);