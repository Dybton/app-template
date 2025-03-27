export function formatDate(date: Date | string): string {
  const dateObject = typeof date === "string" ? new Date(date) : date;

  return dateObject.toLocaleDateString("en-GB");
}
