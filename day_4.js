// for(let i =0 ; i < 10; i++) console.log(i+1)
// let arr = [ 1,2,3,4,5,[1,23],7,"string",true,10]
// for (const i of arr) {
//     console.log(typeof i)
// }
let i = 1;
// let sum = 0;
// while(i <= 10){
//     sum += i;
//     i++;
// }
// console.log(sum);
while(i <= 5){
    let j = 0;
    let s = "";
    while(j < i){
        s += "* ";
        j++;
    }
    console.log(s);
    i++;
}