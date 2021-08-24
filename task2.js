//2. Написать функцию, которая принимает число от 1 до 999 и возвращает его строковый вариант.
//numToString(123) ➞ “Сто двадцать три”
//numToString(5) ➞ “Пять”
//numToString(811) ➞ “Восемьсот одиннадцать”

const ones = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifthteen','sixteen','seventeen','eighteen','nineteen', 'twenty'];
const tens = ['','ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
const hundreds = ['','hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
let stringNumberWord ='';
function numToString(num) {
    num = Number(prompt('Enter number between 0 to 999'));
    let one, ten, hundred;

    one = num % 10;
    num = Math.floor(num / 10);
    
    ten=num % 10;
    
    if (ten==1 && (one>=1 && one<=9)) {
        one=ten * 10 + one;
        ten=0;
    }
    num = Math.floor(num / 10);
    hundred = num;
    stringNumberWord = stringNumberWord + hundreds[hundred] + ' ' + tens[ten] + ' ' + ones[one];
    return stringNumberWord;
} 
alert(numToString());