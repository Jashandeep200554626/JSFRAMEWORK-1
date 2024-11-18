// Announce marriage
export function announceMarriage (person1, person2, place) {
    console.log(`${person1} is getting married to ${person2} at ${place}.`);
}

// Miles per Housr to Kilometers per Hour
export function mphToKmph(mph) {
    return mph * 1.60934;
}

// Greatest Common Divisor
export function gcdCalculator(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a; // GCD of a and b
}

// BMI calculation
export function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Weight and height must be positive numbers.";
    }

    const bmi = weight / (height * height);
    console.log(`BMI is ${bmi.toFixed(2)}`);
    if (bmi < 18.5) {
        console.log("You are Underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
         console.log("Normal weight");
    } else if (bmi >= 25 && bmi < 29.9) {
         console.log("This bmi indicates that you are overweight");
    } else {
        console.log("This bmi indicates obesity");
    }
}