export function getFormatedDate(date) {
  const validDate = typeof date === "string" ? new Date(date) : date;

  const yyyy = validDate.getFullYear();
  const mm = String(validDate.getMonth() + 1).padStart(2, "0"); // Month is 0-based
  const dd = String(validDate.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

export function getDateMinusDays(date, days) {
  const validDate = typeof date === "string" ? new Date(date) : date;
  return new Date(
    validDate.getFullYear(),
    validDate.getMonth(),
    validDate.getDate() - days
  );
}
