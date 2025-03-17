
let marksWeight, marksHeight, johnsWeight, johnsHeight;

marksWeight = 78;
marksHeight = 1.69;

johnsWeight = 92;
johnsHeight = 1.95;

let marksBMI, johnsBMI;

marksBMI = marksWeight / marksHeight ** 2;
console.log(marksBMI)

johnsBMI = johnsWeight / johnsHeight ** 2;
console.log(johnsBMI)

let markHigherBMI = marksBMI > johnsBMI;
console.log("If marks BMI is greater = ", markHigherBMI)


let marksWeight2, marksHeight2, johnsWeight2, johnsHeight2;

marksWeight2 = 95;
marksHeight2 = 1.88;

johnsWeight2 = 85;
johnsHeight2 = 1.76;

let marksBMI2, johnsBMI2;

marksBMI2 = marksWeight2 / marksHeight2 ** 2;
console.log(marksBMI2)

johnsBMI2 = johnsWeight2 / johnsHeight2 ** 2;
console.log(johnsBMI2)

let markHigherBMI2 = marksBMI2 > johnsBMI2;
console.log("If marks BMI is greater = ", markHigherBMI2)