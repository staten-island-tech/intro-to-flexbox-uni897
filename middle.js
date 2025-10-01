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
function isTelemarketer(num1, num2, num3, num4) {
    console.log(num1 === 8 || num1 === 9);
    console.log(num2 === num3);
    console.log(num4 === 8 || num4 === 9);
    if ((num1 === 8 || num1 === 9) && (num2 === num3) && (num4 === 8 || num4 === 9)){
        console.log("ignore");
    }else{
        console.log("answer");
    }
}

isTelemarketer(8, 7, 6, 9)
*/

const string = "Lorsque j'avais six ans j'ai vu, une fois, une magnifique image, dans un livre";

function isFrench(list){
    let tcount = 0;
    let scount = 0;
    for (let i = 0; i < list.length; i++){
        const newstring = [...list]
        tcount = newstring.filter((lt) => lt === 't' || lt === 'T').length;
        scount = newstring.filter((lt) => lt === 's' || lt === 'S').length;
    }
    if(tcount <= scount){
        return "French";
    }
    return "English";
}

//console.log(isFrench(string));

const day1 = "CC..C"
const day2 = ".CC.."

function notOpen(day1, day2){
    let index = []
    for (let i = 0; i < day1.length; i++){
        if (day1[i] === 'C' && day2[i] === 'C'){
            index.push(i)
        }
    }
    if(index.length > 0){
        console.log(index.length+" space(s) occupied for both days")
    }else{
        console.log("No spaces were occupied for both days")
    }
}
notOpen(day1, day2);