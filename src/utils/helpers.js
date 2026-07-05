const SERVICES = [
  { day: 0, label: "Celebration Service", time: "8:00 AM" },
  { day: 2, label: "Empowerment Service", time: "6:00 PM" },
  { day: 4, label: "Solution Hour", time: "6:00 PM" },
];

export const getNextService = (date) => {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date");
  }

  const baseDate = new Date(date);
  baseDate.setHours(0, 0, 0, 0);

  for (let offset = 0; offset < 14; offset += 1) {
    const candidate = new Date(baseDate);
    candidate.setDate(baseDate.getDate() + offset);

    const service = SERVICES.find((item) => item.day === candidate.getDay());

    if (!service) continue;

    const [hours, minutes] = service.time.match(/(\d+):(\d+)/).slice(1).map(Number);
    const isPm = /PM/i.test(service.time);
    const adjustedHours = isPm && hours !== 12 ? hours + 12 : hours;

    candidate.setHours(adjustedHours, minutes, 0, 0);

    if (candidate > date) {
      return { ...service, date: candidate };
    }
  }

  const nextWeek = new Date(baseDate);
  nextWeek.setDate(baseDate.getDate() + 7);
  const firstService = SERVICES[0];
  const [hours, minutes] = firstService.time.match(/(\d+):(\d+)/).slice(1).map(Number);
  nextWeek.setHours(hours, minutes, 0, 0);

  return { ...firstService, date: nextWeek };
};

export const calculateTimeLeft = (date) => {
  const nextService = getNextService(date);
  const difference = +new Date(nextService.date) - +new Date();
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
