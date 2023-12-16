let userName = "";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "What's in my future?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
  eightBall = "Do not count on it";
} else if (randomNumber === 5) {
  eightBall = "My sources say no";
} else if (randomNumber === 6) {
  eightBall = "Outlook not so good";
} else if (randomNumber === 7) {
  eightBall = "Signs point to yes";
}
console.log(eightBall);

switch (randomNumber) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  case 4:
    console.log("4");
    break;
  case 5:
    console.log("5");
    break;
  case 6:
    console.log("6");
    break;
  case 7:
    console.log("7");
    break;
}