const prompt = require('prompt-sync')({sigint: true});


let num1 = Number(prompt("Enter your number:  "));

if (num1 ===1){
    console.log("Monday");
}
if (num1 ===2){
    console.log("Tuesday")
}else if (num1 ===3){
    console.log("Wednsday")
}else if (num1 ===4){
    console.log("Thursday")
}else if (num1 ===5){
    console.log("Friday")
}else if (num1 ===6){
    console.log("Saturday")
}else if (num1 ===7){
    console.log("Sunday")
}else if (num1 >=8){
    console.log("Error")
}else if (num1 <=0){
    console.log("Error")
}

