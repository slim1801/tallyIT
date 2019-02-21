import { createSelector } from "reselect";

const getEntryDateTime = state => state.form.entryDateTime;
const getExitDateTime = state => state.form.exitDateTime;

function isWeekend(dateTime) {
  const day = dateTime.getDay();
  return day === 6 || day === 0;
}

function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function minutesInDay(date) {
  return calculateMinutes(date.getHours(), date.getMinutes());
}

function calculateMinutes(hour, minutes) {
  return hour * 60 + minutes;
}

function diffDays(date1, date2) {
  const timeDiff = date2.getTime() - date1.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

function diffHours(date1, date2) {
  const timeDiff = date2.getTime() - date1.getTime();
  return timeDiff / (1000 * 3600);
}

function getTotalDay(date) {
  return Math.round(date.getTime() / (1000 * 3600 * 24));
}

export default createSelector(
  getEntryDateTime,
  getExitDateTime,
  (entryDTString, exitDTString) => {
    if (entryDTString && exitDTString) {
      const entryDateTime = new Date(entryDTString);
      const exitDateTime = new Date(exitDTString);

      const entryTimeIsWeekend = isWeekend(entryDateTime);
      const exitTimeIsWeekend = isWeekend(exitDateTime);
      const entryTime = minutesInDay(entryDateTime);
      const exitTime = minutesInDay(exitDateTime);
      if (
        sameDay(entryDateTime, exitDateTime) &&
        !entryTimeIsWeekend &&
        !exitTimeIsWeekend &&
        entryTime >= calculateMinutes(6, 0) &&
        entryTime <= calculateMinutes(9, 0) &&
        exitTime >= calculateMinutes(15, 30) &&
        exitTime <= calculateMinutes(23, 30)
      ) {
        return 13;
      } else if (
        ((!entryTimeIsWeekend && entryTime >= calculateMinutes(18, 0)) ||
          ((entryDateTime.getDay() !== 0 || entryDateTime.getDay() !== 1) &&
            entryTime === calculateMinutes(0, 0))) &&
        exitTime <= calculateMinutes(6, 0) &&
        exitTime !== calculateMinutes(0, 0) &&
        (exitDateTime.getDay() - entryDateTime.getDay() === 1 ||
          (entryTime === calculateMinutes(0, 0) &&
            exitDateTime.getDay() - entryDateTime.getDay() === 0))
      ) {
        return 6.5;
      } else if (entryTimeIsWeekend && exitTimeIsWeekend) {
        return 10;
      } else {
        const diffH = diffHours(entryDateTime, exitDateTime);
        if (diffH < 1 && diffH >= 0) {
          return 5;
        } else if (diffH < 2) {
          return 10;
        } else if (diffH < 3) {
          return 15;
        } else {
          return (
            (getTotalDay(exitDateTime) - getTotalDay(entryDateTime) + 1) * 20
          );
        }
      }
    }
    return 0;
  }
);
