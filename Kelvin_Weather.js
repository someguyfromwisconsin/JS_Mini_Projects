const kelvin = 0;
console.log(`The temperature is ${kelvin} Kelvin.`);
// Code creates a variable kelvin that remains constant at 293

celsius = kelvin-273;
console.log(`The temperature is ${celsius} degrees Celsius.`);
// celsius is always 273 less than kelvin, so this calculates for celsius dependent on what we put for the constant kelvin

farenheit = celsius*(9/5)+32;
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Farenheit`);
// the formula above converts celsius into farenheit. It then ensures that farenheit is rounded down to the nearest whole integer, because when converting from celsius to farenheit, often a decimal will be given.

Newton = celsius*(33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton.`);
