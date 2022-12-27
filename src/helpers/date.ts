export const hoursToSeconds = (hours: number): number => hours * 60 * 60;
export const minutesToSeconds = (minutes: number): number => minutes * 60;

export const durationToSeconds = (duration: string): number => {
  const [hours, minutes, seconds] = duration.split(':');

  return hoursToSeconds(+hours) + minutesToSeconds(+minutes) + +seconds;
};

export const getEndDate = (
  startDate: string | Date,
  duration: string
): Date => {
  const date = new Date(startDate);
  date.setSeconds(date.getSeconds() + durationToSeconds(duration));

  return date;
};

export const getStartFromEndDatesPercents = (
  startDate: string | Date,
  endDate: string | Date
): number => {
  const nowTime = new Date().getTime();
  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const PERCENTS_MULTIPLIER = 100;

  return ((nowTime - startTime) / (endTime - startTime)) * PERCENTS_MULTIPLIER;
};
