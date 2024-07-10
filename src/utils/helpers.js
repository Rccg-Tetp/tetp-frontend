export const getNextSunday = (date) => {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date");
  }

  const dayOfWeek = date.getDay();

  const daysUntilNextSunday = 7 - dayOfWeek || 7;

  const nextSunday = new Date(date);
  nextSunday.setDate(date.getDate() + daysUntilNextSunday);
  nextSunday.setHours(8, 0, 0, 0);

  return nextSunday;
};

export const calculateTimeLeft = (date) => {
  const difference = +new Date(getNextSunday(date)) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return timeLeft;
};

export const formatDate = (date) => {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date");
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let ordinalSuffix;
  if (day > 3 && day < 21) {
    ordinalSuffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        ordinalSuffix = "st";
        break;
      case 2:
        ordinalSuffix = "nd";
        break;
      case 3:
        ordinalSuffix = "rd";
        break;
      default:
        ordinalSuffix = "th";
        break;
    }
  }

  return `${dayOfWeek}, ${day}${ordinalSuffix} ${month}, ${year}`;
};
