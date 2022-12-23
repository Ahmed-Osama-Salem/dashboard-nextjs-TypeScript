export function handelTime(from: any) {
  let time = from
    .toString()
    .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [from];

  if (time.length > 1) {
    time = time.slice(1, -1);
    time[5] = +time[0] < 12 ? ' am' : ' pm';
    time[0] = +time[0] % 12 || 12;
  }
  return time.join('');
}
// subtract two hours
export function subtractTimes(s: string, t: string) {
  const startTime = s?.split('');
  const endTime = t?.split('');
  startTime?.splice(2, 3);
  const join = startTime?.join('');
  const arrOfNum = Number(join);
  endTime?.splice(2, 3);
  const join2 = endTime?.join('');
  const arrOfNum2 = Number(join2);
  return arrOfNum2 - arrOfNum;
}
// subtract two min add ? optinal to avoid errors
export function subtractMin(s: string, t: string) {
  const startMin = s?.split('');
  const endMin = t?.split('');
  startMin?.splice(0, 3);
  const joinMin = startMin?.join('');
  const arrNum = Number(joinMin);
  endMin?.splice(0, 3);
  const joinMin2 = endMin?.join('');
  const arrNum2 = Number(joinMin2);
  return Math.abs(arrNum - arrNum2);
}
