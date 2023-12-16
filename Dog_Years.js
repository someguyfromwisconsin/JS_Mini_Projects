let myAge = 32;
let earlyYears = 2;
earlyYears *= 10.5;

laterYears = myAge - 2;
// This resets the dog years age to two less, since early years have already been accounted for.

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears;
// My age is dog years is the sum of the early years and later years.

myName = "Jordan".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)