// The scope of `random` is too loose 
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  
  
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // The scope of `days` is too tight 
  const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
      let days = 50;
    } else if (event === 'Triathlon') {
      let days = 100;
    } else if (event === 'Pentathlon') {
      let days = 200;
    }
  
    return days;
  };
  
  // The scope of `name` is too tight 
  
    const name = 'Nala';
    const event = getRandEvent();
    const days = getTrainingDays(event);
  
    const name2 = 'Warren';
    const event2 = getRandEvent();
    const days2 = getTrainingDays(event);
  
  
  const logEvent = event => {  
  console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = days => {  
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  logEvent(name, event);
  logTime(name, days);
  
  logEvent(name, event);
  logTime(name2, days);
  