const getSleepHours = (day) => {
    switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 5;
      break;
    case "thursday":
      return 9;
      break;
    case "friday":
      return 2;
      break;
    case "saturday":
      return 12;
      break;
    case "sunday":
      return 8;
  }
  }
  
  const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours) {
      console.log(`Perfect sleep! You sleep an average of ${idealSleepHours / 7} hours each night.`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got way too much sleep, dude! You overslept a total of ${actualSleepHours - idealSleepHours} hours this week.`)
    } else {
        console.log(`You need to get more sleep, man. You missed out on ${idealSleepHours - actualSleepHours} hours of sleep.`);
    }
  }
  
  console.log(getSleepHours("saturday"));
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  calculateSleepDebt()