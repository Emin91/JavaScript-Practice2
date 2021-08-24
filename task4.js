//Найти расстояние между двумя точками в двумерном декартовом пространстве
//findCoords(Сюда отправить координаты двух точек) ➞ “64”
//findCoords(Сюда отправить координаты двух точек) ➞ "23"


let a,b,c,d;

a = prompt("Enter a");
b = prompt("Enter b");
c = prompt("Enter c");
d = prompt("Enter d");

a = parseInt(a);     //The parseInt func converts its first argument to a string, parses that string, then returns an integer or NaN
b = parseInt(b);

c = parseInt(c);
d = parseInt(d);


function findCoords(a, b ,c ,d ) {
 let distance;

 distance = Math.sqrt(((c - a) * (c - a)) + ((d - b)*(d - b)))
 return "Distance equals " + distance.toFixed(2);

}

alert(findCoords(a, b ,c, d ));