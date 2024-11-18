import { announceMarriage, mphToKmph, gcdCalculator, calculateBMI } from './utilities.js';

announceMarriage("Virat Kohli", "Anushka Sharma", "Grand Hyaat, New Delhi");


let mph = 120;
let kmph = mphToKmph(mph);
console.log(`${mph} miles per hour is equal to ${kmph} Kmph`);


let a = 12;
let b = 16
let gcd = gcdCalculator(a,b);
console.log(`Greatest Common Divisor of ${a} and ${b} is: ${gcd}`);


let weight = 70; //kilograms
let height = 1.72; //meters
calculateBMI(weight, height)
