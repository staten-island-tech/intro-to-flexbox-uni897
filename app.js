/* we declare and define a variable x
let x = 5;
x = 6;
console.log(x);

const y = 5;
y = 6;
console.log(y);


//string
const zaddy = "Daddy Owen";

//integer
const y = 56;

//boolean
const citizen = true;

//null is the absence of a value
let name = null;

//undefined
let age;

//functions are input and outputs
function add(n1, n2){
    return(n1 + n2);
}

console.log(add(6,7));

const something = 7

function returnThing(){
    const something = 5
    console.log(something);
}


const name = "Daddy Owen";
console.log(`I love ${name}`);

console.log(5 % 2);

const age = 18;
if (age >= 18) {
    console.log("Vote");
}else{
    console.log("No vote");
}

const temp = 32;
if (temp >= 212) {
    console.log("Boiling");
}else if (temp <= 32) {
    console.log("Freezing");
}else{
    console.log("water");
}
const age = 35;
const citizen = true;

if (age === true || citizen === true){
    console.log("You can run for president");
}
*/

function enterCastle(key, magicpowers, isBanned){
    if ((key || magicpowers) && !isBanned){
        console.log("You may enter the castle");
    }else{
        console.log("You may not enter the castle");
    }
}

enterCastle(true, true, true);