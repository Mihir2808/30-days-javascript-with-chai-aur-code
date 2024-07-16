// task 1

// let input  = 2;

// if(input == 0)  console.log(0)
// else if(input > 0)  console.log("positive")
// else if(input < 0)  console.log("negative")


// let age = 18;

// if(age == 18)  console.log("vote dega")
// else if(age > 18)  console.log("vote dega")
// else if(age < 18)  console.log("nahi dega vote")

// largest of 3 numbers

// let a1 = 123
// let b1 = 23, c = 234;
// console.log(typeof a1);
// console.log(typeof b1);
// console.log(typeof c);
// if(a1 > b1){
//     if(a1 > c)   console.log(a1);
//     else console.log(c);
// }
// else if(b1 > a){
//     if(b1 > c) console.log(b1);
//     else console.log(c);
// }
// else if(c > a1){
//     if(c > b1) console.log(c);
//     else console.log(b1)
// }

// switch case
// let dayNo = 8;
// switch(dayNo){
//     case 1:{
//         console.log("Monday")
//         break;
//     }
//     case 2:{
//         console.log("Tuesday")
//         break;
//     }
//     case 3:{
//         console.log("wednesday")
//         break;
//     }
//     case 4:{
//         console.log("Thrusday")
//         break;
//     }
//     case 5:{
//         console.log("Friday")
//         break;
//     }
//     case 6:{
//         console.log("Saturday")
//         break;
//     }
//     case 7:{
//         console.log("Sunday")
//         break;
//     }
//     default:{
//         console.log("no bet 1 to 7 should be entererd")
//     }
// }
        


//ternery operator

// let day = 4
// let val = (day%2 == 0)? console.log(day, "is even no") : console.log(day, "is odd no")


// YEAR IS LEAP YEAR OR NOT

let year = 2024
if(year%4 == 0){
    if(year%100 == 0 && year %400 != 0){
        console.log(" Not as leap year");
        
    }
    else if((year%100 == 0 && year%400 == 0 ) || year%100 != 0)
        console.log("yes it is a leap year");
}
else{
    console.log("Not a leap year")
}