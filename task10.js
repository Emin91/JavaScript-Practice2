//Написать функцию, которая принимает значения start и end в параметрах, возвращает массив, который содержит все числа в данном диапазоне, включая отправленные. Порядок расположения чисел в возвращаемом массиве зависит от того, какие параметры были отправлены
//reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]
//reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
//reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]


function Inclusivelist(start, end) {
    const array1 = [];
    let number = 1;
    let lenght = end-start+1;
    if (start>end)
    {
      numbar = -1;
      lenght = start-end+1;
    }

    for (let i = 1;i <= lenght; i++) {
        array1.push(start);
        start = start + number;
    }

     

    return array1;
}

alert(Inclusivelist(4, 13));