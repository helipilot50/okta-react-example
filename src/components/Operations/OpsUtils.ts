export function formatDate(date?: Date): string {
  if (!date) return '';
  const month = date.getMonth() + 1; // + 1 because 0 indicates the first Month of the Year.
  const day = date.getDate();
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};