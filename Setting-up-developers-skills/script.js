 // Remember, we're gonna use strict mode in all scripts now!
'use strict';



const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let maxTemp = 0;
let minTemp = 0;

const checkTemp = function(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            // console.log('this is not a number');
            continue
        } else {
            console.log(`this is number ${arr[i]}`);

            if (minTemp > arr[i]) {
                minTemp = arr[i];

                console.log(`${arr[i]} is the new min value`);
            } else if (maxTemp < arr[i]){
                maxTemp = arr[i] 

                console.log(`${arr[i]} is the new max value`);
            }
        }
    };        
    console.log('\n');
    console.log(`the min value is ${minTemp} and the max value is ${maxTemp} and the amplitude is ${maxTemp - minTemp}`);
};

checkTemp(temparatures);