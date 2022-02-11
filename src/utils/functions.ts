export const getFormattedDate = (dateObj: Date) => {
  // @NOTE yyyy-mm-dd hh:MM:ss
  dateObj.setHours(dateObj.getHours() + 9);
  return dateObj.toISOString().replace('T', ' ').substring(0, 19);
};
