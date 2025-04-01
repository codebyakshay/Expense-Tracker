export function getFormatedDate(date) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate().toString().padStart(2, "0"); // Ensure two-digit day
  const month = monthNames[date.getMonth()]; // Get short month name
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
