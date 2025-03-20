'use strict';

// function ageCalculator(birthYear) {
//     const presentYear = 2025;
//     const presentAge = presentYear - birthYear
//     console.log(presentAge)
// }

// ageCalculator(2004)


// const retirementAge = birthYear => {
//     const presentAge = 2025 - birthYear;
//     const retirement = 65 - presentAge;

//     return retirement;
// }

// console.log(retirementAge(2004))


// const calcAge = birthYear => 2025 - birthYear;

// function yearsTillRetirement( birthYear, firstName ) {
//     const presentAge = calcAge(birthYear);

//     if (presentAge > 65) {
//         const above = presentAge - 65;
//         console.log(`${firstName}'s retirement age has passed ${above} years ago`);
//     } else {
//         const remainingYears = 65 - presentAge;

//         console.log(`${firstName} retires in ${remainingYears}`);
//     }
// }

// yearsTillRetirement(1940, 'eugene')




const calcAverage = ( score1, score2, score3) => (score1 + score2 + score3 ) / 3;

console.log(calcAverage(3, 6, 9));

const teamDolphins = calcAverage(85, 54, 41);
const teamKoalas = calcAverage(23, 34, 27);

console.log(teamDolphins, teamKoalas)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Team Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Team Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`It's a draw match`)
    }
}

checkWinner(teamDolphins, teamKoalas);