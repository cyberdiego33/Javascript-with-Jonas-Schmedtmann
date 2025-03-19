
// let marksWeight, marksHeight, johnsWeight, johnsHeight;

// marksWeight = 78;
// marksHeight = 1.69;

// johnsWeight = 92;
// johnsHeight = 1.95;

// let marksBMI, johnsBMI;

// marksBMI = marksWeight / marksHeight ** 2;
// console.log(marksBMI)

// johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(johnsBMI)

// let markHigherBMI = marksBMI > johnsBMI;
// console.log("If marks BMI is greater = ", markHigherBMI)


// let marksWeight2, marksHeight2, johnsWeight2, johnsHeight2;

// marksWeight2 = 95;
// marksHeight2 = 1.88;

// johnsWeight2 = 85;
// johnsHeight2 = 1.76;

// let marksBMI2, johnsBMI2;

// marksBMI2 = marksWeight2 / marksHeight2 ** 2;
// console.log(marksBMI2)

// johnsBMI2 = johnsWeight2 / johnsHeight2 ** 2;
// console.log(johnsBMI2)

// let markHigherBMI2 = marksBMI2 > johnsBMI2;
// console.log("If marks BMI is greater = ", markHigherBMI2)


// const firstName = "Goodluck";
// const job = "Web developer";
// const birthYear = 2004;
// const presentYear = 2025;

// const diego = "I'm " + firstName + ", a " + ( presentYear - birthYear ) + " years old " + job + "!";
// console.log(diego);

// const NLDiego = `I'm ${firstName} a ${presentYear - birthYear} year old ${job}!`;
// console.log(NLDiego);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`Can Drive 🚗`);
// }else {
//     const yearsLeft = 18 - age;
//     console.log(`Can't drive until ${yearsLeft} years`);
// }


// let marksWeight, marksHeight, johnsWeight, johnsHeight;
 
// marksWeight = 78;
// marksHeight = 1.69;

// johnsWeight = 92;
// johnsHeight = 1.95;

// let marksBMI, johnsBMI;

// marksBMI = marksWeight / marksHeight ** 2;
// console.log(marksBMI);

// johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(johnsBMI);

// let markHigherBMI = marksBMI > johnsBMI;
// console.log("If marks BMI is greater = ", markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})!`);
// }else {
//     console.log(`John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI})!`);
// }



const teamDolphin = (97 + 112 + 101 ) / 3;
const teamKoalas = (109 + 95 + 106) / 3;

// const teamDolphin = 55;
// const teamKoalas = 80;

let winner;
let draw;
let minimun;

if ( teamDolphin > teamKoalas && teamDolphin >= 100) {
    winner = 'team Dolphins'
}else if (teamKoalas > teamDolphin && teamKoalas >= 100) {
    winner = 'Team Koalas'
}else if (teamDolphin === teamKoalas && teamDolphin > 100) {
    draw = `It's a draw between both teams`
}else if (teamDolphin < 100 && teamKoalas < 100) {
    minimun = `Both teams didn't reach minimun score, So it's a failed match`
}


if (winner) {
    console.log(`Team Dolphins have an Average of ${teamDolphin}
Team Koalas have an Average of ${teamKoalas}
So the Winner is ${winner} 🎉`)
} else if (draw) {
    console.log(`Team Dolphins have an Average of ${teamDolphin}
Team Koalas have an Average of ${teamKoalas}
${draw}`)
} else if (minimun) {
    console.log(`Team Dolphins have an Average of ${teamDolphin}
Team Koalas have an Average of ${teamKoalas}
${minimun}`)
}
