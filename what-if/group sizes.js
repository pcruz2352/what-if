const prompt = require('prompt-sync')({sigint: true});


let num1 = Number(prompt("Enter your class size:  "));


if (num1 ===15){
    console.log("3 Groups of 5, 0 Groups of 2")
}else if (num1 ===16){
    console.log("4 Groups of 3, 2 groups of 2")
}else if (num1 ===17){
    console.log("5 Groups of 3, 1 Group of 2")
    
}