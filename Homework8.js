//1
// var i=0;
// while (i<100) {
//     i += 1;
//     console.log(i)
// }
//2
// var i;
// for (i=11; i<=33; i+=1){
//     console.log(i)
// }
//3
// var i=0;
// while (i<100) {
//     i+=1; {
//         if(i % 2 ===0){
//             console.log(i);
//         }
//     }
// }
//4
// var i, sum=0;
// for (i=0; i<100; i+=1){
//     sum=sum+i;}
// console.log(sum);
//5
// var n=1000, num=0;
// while (n>50){
//     n=n/2;
//     num=num+1;
//     console.log(num, n)
// }
// var n;
// var num=0;
// for (n=1000; n>50;){
//     n=n/2;
//     num+=1;
//     console.log(n);}
// let fruits = ["Яблоко", "Апельсин", "Слива"];
//
// // проходит по значениям
// for (let frui of fruits) {
//     alert( frui );
// }
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
// styles[0]= "dd";
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift('Рэп', 'Рэгги');
alert(styles);