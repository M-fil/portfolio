import {
  personalData,
  dateConstants,
} from '../constants/constants';

const {
  DATE_OF_BIRTH,
} = personalData;

const {
  MILISECONDS_PER_SECOND,
  SECONDS_PER_MINUTE,
  HOURS_PER_DAY,
  AVERARGE_DAYS_PER_YEAR,
} = dateConstants;

const calculateAge = (dateOfBirth: string = DATE_OF_BIRTH): number => {
  const differenceInDates = new Date().getTime() - new Date(dateOfBirth).getTime();
  return Math.floor((differenceInDates / MILISECONDS_PER_SECOND / SECONDS_PER_MINUTE)
    / SECONDS_PER_MINUTE / HOURS_PER_DAY / AVERARGE_DAYS_PER_YEAR);
};

export {
  calculateAge,
};
