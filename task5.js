//Написать функцию, которая принимает два массива чисел, сортирует их (можно использовать sort) и возвращает массив чисел, которые встречались в обоих входных массивах.
//commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

const array1 = [1, 2, 3, 4, 5, 43,55, 96];
const array2 = [1,4, 5, 43, 96];


function commonElements (array1,array2) {
   let commonArr = [];
   let count = 0;

    for (let i=0; i < array1.length; i++){
         count=0;
        for (let j=0; j<array2.length; j++)
        {
            if (array1[i]===array2[j]) {
                for (let k=0;k<=commonArr.length;k++)
                {
                    if (commonArr[k]===array1[i]){
                        count=count+1;
                    }
                     
                 }
                   if ( count >= 5 ) {
                   }    
                   else {
                     commonArr.push(array1[i]); 
                   }
                   
                   
                }

            }
        }
 if (commonArr.length>0) {
        return "Intersection of two arrays " + commonArr;
    }
    else {
        return "No common elements";
    }
}

alert(commonElements(array1, array2));