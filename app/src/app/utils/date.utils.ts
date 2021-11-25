export function toTimestamp(date: any) {
  if (date === null) {
    return null;
  }
  date = new Date(date);
  // valueOf permet de récupérer le timestamp
  const timestampToday = date.valueOf();
  return timestampToday;
}
