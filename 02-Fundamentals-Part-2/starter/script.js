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


const calcAge = birthYear => 2025 - birthYear;

function yearsTillRetirement( birthYear, firstName ) {
    const presentAge = calcAge(birthYear);

    if (presentAge > 65) {
        const above = presentAge - 65;
        console.log(`${firstName}'s retirement age has passed ${above} years ago`);
    } else {
        const remainingYears = 65 - presentAge;

        console.log(`${firstName} retires in ${remainingYears}`);
    }
}

yearsTillRetirement(1940, 'eugene')