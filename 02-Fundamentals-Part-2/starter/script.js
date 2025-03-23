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




// const calcAverage = ( score1, score2, score3) => (score1 + score2 + score3 ) / 3;

// console.log(calcAverage(3, 6, 9));

// const teamDolphins = calcAverage(85, 54, 41);
// const teamKoalas = calcAverage(23, 34, 27);

// console.log(teamDolphins, teamKoalas)

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Team Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Team Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`It's a draw match`)
//     }
// }

// checkWinner(teamDolphins, teamKoalas);


// Exercise for Arrays 

// const calcAge = birthYear => 2025 - birthYear;

// const dateOfBirths = [1990, 1967, 2002, 2010, 2018];

// const ages = [calcAge(dateOfBirths[2]), calcAge(dateOfBirths[0]), calcAge(dateOfBirths[dateOfBirths.length - 1])];

// console.log(ages)



// Exercise Array Methods   

// Array.push('element') : Add elements to the end
// Array.unshift('element') :  add elements to the start
// Array.pop() : Removes the last element
// Array.shift() : Removes the first element
// Array.indexof('element') : returns the index of the element
// Array.includes('element') : returns a boolean of whether the element is in the array or not 


// tip calculator 

// const getTipAmount = (per, bill) => ( per / 100 ) * bill;

// console.log(getTipAmount(20, 200))

// function calcTip(bill) {

//     let tip;

//     if (bill >= 50 && bill <= 300) {
//         tip = getTipAmount(15, bill);
//     } else if (bill < 50 ) {
//         tip = `Thanks for shopping here`;
//     } else {
//         tip = getTipAmount(20, bill );
//     }

//     return tip;
// }

// let tip = calcTip(44);
// console.log(tip);

// const billList = [ 125, 555, 44];
// const tipList = [calcTip(billList[0]), calcTip(billList[1]), calcTip(billList[2])];

// const  totalBill = [billList[0] + calcTip(billList[0]), billList[1] + calcTip(billList[1]), billList[2] + calcTip(billList[2])]

// console.log(totalBill)

// console.log(tipList);





// Object Challenge 

// const jonas = {
//     firstName : 'jonas',
//     lastName : 'schmedtman',
//     age: 2025 -1991,
//     job : 'teacher',
//     friends : ['Michael', 'bob', 'Sandy'],
//     location : 'Portugal',
//     twitter: '@jonasschmedtman'
// };

// const interestedIn = prompt('Choose a prompt');

// if (jonas[interestedIn] === jonas.friends) {
//     console.log(`Jonas has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
// } else if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log(`Wrong request`);
// }






// methods 

// const jonas = {
//     firstName : 'jonas',
//     lastName : 'schmedtman',
//     age: 2025 -1991,
//     job : 'teacher',
//     friends : ['Michael', 'bob', 'Sandy'],
//     location : 'Portugal',
//     twitter: '@jonasschmedtman',
//     DriversLicense : true,

//     summary: function() {
//         const hasLicense = this.DriversLicense ? 'a' : 'no';

//         console.log(`${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${hasLicense} driver's license. `);
//     }
// };

// jonas.summary();




// const johnBMI = {
//     firtName : 'John',
//     lastName : 'Smith',
//     fullName : `John Smith`,
//     mass : 92,
//     height: 1.95,

//     calcBMIfunct : function () {
//         this.calcBMI =  this.mass / (this.height ** 2);
//         return this.calcBMI;
//     }
// }

// const MarkBMI = {
//     firtName : 'Mark',
//     lastName : 'Miller',
//     fullName : `Mark Miller`,
//     mass : 78,
//     height: 1.69,

//     calcBMIfunct : function () {
//         this.calcBMI =  this.mass / (this.height ** 2);
//         return this.calcBMI;
//     }
// }

// const mark = MarkBMI.calcBMIfunct();
// const john = johnBMI.calcBMIfunct();

// console.log(mark, john);

// if ( mark > john ) {
//     console.log(`${MarkBMI.fullName}'s BMI (${MarkBMI.calcBMI}) is higher than ${johnBMI.fullName}'s BMI (${johnBMI.calcBMI}) `);
// } else {
//     console.log(`${johnBMI.fullName}'s BMI ${johnBMI.calcBMI} is higher than ${MarkBMI.fullName}'s BMI ${MarkBMI.calcBMI}`);
// } 



// for loop 

// for ( let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

const jonas = ['Jonas', 'Schmedtmann', 2025 - 1991, 'teacher', 
                ['Micheal', 34, 'Steven'], true]

const types = [];
const arrayValue = []

for ( let items = 0; items < jonas.length; items++) {
    let obj = typeof jonas[items];
    let objCompare = typeof jonas;
    if ( obj === objCompare) {
        console.log('middle array')
        for (let i = 0; i < jonas[items].length; i++) {
            arrayValue.push(typeof jonas[items][i]);
            console.log(`${jonas[items][i]} is a ${arrayValue[i]}`);
        }
    } else {
            types.push(typeof jonas[items]);
            console.log(`${jonas[items]} is a ${types[items]} value`);
    }
}

console.log(typeof jonas[5])