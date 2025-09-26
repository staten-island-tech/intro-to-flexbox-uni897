/*
function findMiddle(num1, num2, num3) {
    if (num1 >= num2 && num1 <= num3 || num1 <= num2 && num1 >= num3){
        console.log(num1);
    }else if (num2 >= num1 && num2 <= num3 || num2 <= num1 && num2 >= num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}

findMiddle(10, 5, 8);
*/
function isTelemarketer(num1, num2, num3, num4) {
    if ((num1 === 8 || num1 === 9) && (num2 === num3) && (num4 === 8 || num4 === 9)){
        console.log("ignore");
    }else{
        console.log("answer");
    }
}

isTelemarketer(8, 6, 6, 9)