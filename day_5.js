//functions
// simple function
// function solve(val){
//     if(val%2 == 0)  console.log(val, 'is even no');
//     else console.log(val,'is odd no')
// }
// solve(3)

// arrow function
// const solve = (val) =>{
//     if(val%2 == 0)  console.log(val, 'is even no');
//     else console.log(val,'is odd no')
// }
// solve(3)


// rest or spread operator
// function solve(...nums){
//     return nums;
// }
// console.log(solve(1,25,234,2342.234))

// let value = function one(val){
//     return val+1
// }
// console.log(value(1))


// square of no function

// let square = (val) =>{
//     return val**2
// }
// console.log(square(5))

//function expression

// let maxi = function(num1, num2){
//     return Math.max(num1,num2)
// }
// console.log(maxi(1, 3));


// concatenate 2 strings
// let concat = function(s1, s2){
//     return (s1+s2).endsWith("bya")
// }
// console.log( concat("hello","baby"));


// string contains a specific value or not


// const arrowfunction = ( s1 , ch) =>{
//     if(s1.match(ch) == null)   console.log(false);
//     else{ 
//         console.log(true);
//         console.log("index is", s1.match(ch).index);
//     }
// }
// arrowfunction("gautam", 't')

// function solve(num1 , num2 = 10){
//     return num1*num2;
// }
// console.log(solve(10,9))

// function solve(name, age= 19){
//     console.log(`Hi ${name} , how are you , i know your age might be ${age}`)
// }
// solve("Mihir")

// function higher( solve, n){
//     while(n--){
//         solve("Mihir");
//     }
// }
// higher(solve,5);


// higher order functions

function func1(start){
    return start*34;
}
function func2(result){
    return  result + 34;
}
function high(func1, func2,  start){
    const result = func1(start);
    const total = func2(result)
    return total
}
console.log(high(func1, func2, 1))