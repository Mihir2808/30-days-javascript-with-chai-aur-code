// var num = 3
// console.log(num);    3

// let s = "Mihir"
// console.log(s);   Mihir

// const num2 = true
// console.log(num2)    true

// different datatypes


// let num3 =  new Number(12)
// console.log(typeof num3)    // object
// console.log(num3)    // [Number : 12]

// let a = 12
// const a = 12
// console.log(typeof a)   // number

// let b = "string"
// console.log(typeof b)    // string

// let b = new String("string")
// console.log(typeof b)       // object
// console.log( b)      // [String: 'string']

// let b = true
// console.log(typeof b)   // boolean

// let b = new Boolean(true)
// console.log(typeof b)       // object
// console.log( b)          //[Boolean: true]

// let obj = {
//     name : "Mihir",
//     class : "MCA"
// }
// console.log(obj)        { name: 'Mihir', class: 'MCA' }
// console.log(typeof obj)

// let obj = new Object({ name: 'Mihir', class: 'MCA' })
// console.lof(obj)   
// console.log(typeof obj) 

// let arr = [ 1,2,3]
// console.log(arr)
// console.log(typeof arr)  //*** interesting 

// let arr = new Array([ 1,2,3]);
// console.log(typeof arr)
// console.log(arr)    //[ []]




// reassigning variable
// let and const are block scoped and nested block scope 
// var are global scoped or functional scoped

// let val = "Mihir"
// console.log(val)
// {
//     let newVal = val
//     val = "changed val"
//     console.log(val)
//     console.log(newVal)}
// {
//     let all = newVal
//     console.log(all);
// }


// let val = "Mihir"
// console.log(val)
// {
//     var newVal = val
//     val = "changed val"
//     console.log(val)
//     console.log(newVal)}
// {
//     let all = newVal
//     console.log(all);
// }


// var val = 1
// console.log(val)
// val = 2
// console.log(val)
// var newVal = val
// console.log(val)
// console.log(newVal)
// {
//     console.log(newVal)
//     newVal = 23
//     newVal = val
//     console.log(newVal)

// }


// const pi = 2.1023
// pi = 23  / error
// console.log(typeof pi)


// todays learning
// immutability of const , let and const reassignment details