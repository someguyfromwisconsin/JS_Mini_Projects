let raceNumber = Math.floor(Math.random() * 1000);

const registerEarly = true;

const runnerAge = 19;

if (runnerAge => 18 && registerEarly === true) {
  raceNumber += 1000;
  console.log(`Congrats! Your race time is 9:30 AM. Your race number is ${raceNumber}. See you at the start line!`);
} else if (runnerAge => 18 && registerEarly === false) {
  console.log(`Nice! Your race time is 11:00 AM. Your race number is ${raceNumber}. Let's do this!`);
} else if (runnerAge < 18) {
    console.log(`Sweet! Your race time is 12:30 PM. Your race number is ${raceNumber}. LFG!`)
}