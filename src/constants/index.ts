export const DEFAULT_DEBOUNCE_TIME = 200;

export const THIS_YEAR = new Date().getFullYear();
export const YEARS = Array(10)
  .fill(0)
  .map((value, index) => THIS_YEAR - index);

export const APODS_PER_API_CALL = 9;