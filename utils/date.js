export function getFormatedDate(date) {
  const validDate = typeof date === "string" ? new Date(date) : date;
  return `${validDate.getFullYear()}-${
    validDate.getMonth() + 1
  }-${validDate.getDate()}`;
}

export function getDateMinusDays(date, days) {
  const validDate = typeof date === "string" ? new Date(date) : date;
  return new Date(
    validDate.getFullYear(),
    validDate.getMonth(),
    validDate.getDate() - days
  );
}
