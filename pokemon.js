let Paint = 14
let Paintperbadge = 3
let Dollarsperbadge = 10

function getMoney(P, B, D) {
    const rem = P % B
    const badgesmade = Math.floor(P / B)
    
    return badgesmade * D + rem
}

console.log(getMoney(Paint, Paintperbadge, Dollarsperbadge))