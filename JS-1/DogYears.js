
// Constant variable Kelvin
const kelvin = 0;

// Constant variable Celsius
const celsius = kelvin - 273;

// Changeable variable Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Round down the value of Fahrenheit
fahrenheit = Math.floor(fahrenheit);

// Changeable variable Newton
let newton = celsius * (33/100);
// Round down the value of Newton
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);