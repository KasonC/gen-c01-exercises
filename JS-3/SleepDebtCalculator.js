const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 7;
    } else if (day === 'sunday') {
      return 8;
    }
  };
  
  console.log(getSleepHours('monday'));
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  };
  
  
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of Sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`${actualSleepHours - idealSleepHours} hours more sleep than needed`);
    } else {
      console.log(`You need to sleep ${idealSleepHours - actualSleepHours} more hours. Get to sleep now!`);
    }
  };
  
  calculateSleepDebt();