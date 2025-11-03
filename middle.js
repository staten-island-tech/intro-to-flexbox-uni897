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
//notOpen(day1, day2);

duels = ["A", "B", "A", "B", "C", "D", "G"]

function dueling(list){
    let elder = list[0]
    for(let i = 1; i < list.length; i = i + 2){
        if(elder === list[i + 1] && list.length != i){
            elder = list[i]
            console.log(elder)
        }
    }
}

//dueling(duels)

const books = [
  { title: "The Silent Forest", author: "Emily Harper", year: 2015, genre: "Fiction", price: 12.99, stock: 8 },
  { title: "Digital Dreams", author: "Michael Chen", year: 2019, genre: "Science Fiction", price: 15.50, stock: 12 },
  { title: "Cooking with Love", author: "Sophia Martinez", year: 2020, genre: "Cooking", price: 22.00, stock: 5 },
  { title: "History of Time", author: "Dr. Alan Stone", year: 2010, genre: "History", price: 18.75, stock: 7 },
  { title: "Ocean Tales", author: "Liam Carter", year: 2018, genre: "Adventure", price: 11.99, stock: 14 },
  { title: "Mind Over Matter", author: "Rachel Kim", year: 2021, genre: "Self-Help", price: 14.25, stock: 9 },
  { title: "The Last Kingdom", author: "David Johnson", year: 2013, genre: "Fantasy", price: 16.40, stock: 10 },
  { title: "Code Masters", author: "Olivia Brown", year: 2022, genre: "Technology", price: 25.00, stock: 6 },
  { title: "Poetry of Stars", author: "Noah Wilson", year: 2017, genre: "Poetry", price: 9.99, stock: 20 },
  { title: "Secrets of the Mind", author: "Hannah Lee", year: 2016, genre: "Psychology", price: 19.99, stock: 11 },
  { title: "Into the Desert", author: "Ethan White", year: 2014, genre: "Adventure", price: 13.50, stock: 13 },
  { title: "World of Wonders", author: "Charlotte Green", year: 2023, genre: "Science", price: 27.80, stock: 4 },
  { title: "Legends Untold", author: "Daniel Wright", year: 2011, genre: "Fantasy", price: 15.20, stock: 8 },
  { title: "Journey to Space", author: "Amelia Young", year: 2020, genre: "Science Fiction", price: 21.00, stock: 7 },
  { title: "Life Lessons", author: "Benjamin Scott", year: 2019, genre: "Non-Fiction", price: 17.25, stock: 15 },
  { title: "Garden Magic", author: "Isabella Adams", year: 2012, genre: "Lifestyle", price: 12.00, stock: 9 },
  { title: "Haunted Nights", author: "Lucas King", year: 2021, genre: "Horror", price: 14.99, stock: 8 },
  { title: "Music of the Soul", author: "Grace Baker", year: 2017, genre: "Music", price: 23.50, stock: 6 },
  { title: "Ancient Civilizations", author: "Christopher Hall", year: 2010, genre: "History", price: 20.75, stock: 10 },
  { title: "Bright Futures", author: "Natalie Moore", year: 2022, genre: "Education", price: 18.00, stock: 12 }
];
/*
books.forEach(title => {
    console.log(title.title)
});

books.filter(book => book.year < 2020).forEach(book => console.log(book.title, book.year))
*/
//const btn = document.querySelector(".btn")
//console.log(btn)

function getrgb() {
    const box = document.querySelector(".box")
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

//btn.addEventListener("click", getrgb)

const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
]

function cartCount(list){
    let total = 0
    list.forEach(item => {
        if (item.price < 5){
            total += item.price * item.quantity * 0.95
        }else{
            total += item.price * item.quantity
        }
    });
    if(total > 100){
        total = total * 0.9
    }
    return total
}
console.log(cartCount(cart))