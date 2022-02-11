export const getFormattedDate = (dateObj: Date) => {
  // @NOTE yyyy-mm-dd hh:MM:ss
  const newDate = new Date(dateObj.valueOf());
  newDate.setHours(dateObj.getHours() + 9);
  return newDate.toISOString().replace('T', ' ').substring(0, 19);
};
