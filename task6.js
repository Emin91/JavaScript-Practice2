//Написать функцию, которая принимает строку и возвращает первый элемент, который повторяется. Если таких элементов нет, вернуть -1.
//firstRepeat("legolas") ➞ "l"
//firstRepeat("Gandalf") ➞ "a"
//firstRepeat("Balrog") ➞ "-1"
//firstRepeat("Isildur") ➞ "-1" // Внимание! Заглавная I не равна прописной i
function firstRepeat(str) {
    const word = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i != j) {
                if (str[i] == str[j]) word.push(str[j]);

            }
        }
    }
    if (word[0] == null) {
        return -2;
    }
    else
        var unique = word.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);

    return unique;
}
console.log(firstRepeat('you are awesome'));

