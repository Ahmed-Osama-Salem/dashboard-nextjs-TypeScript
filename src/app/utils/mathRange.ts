export const mathRangeMosad = (techNum: number, mosadNum: number): string => {
  const result = (mosadNum / techNum) * 100;
  return result.toFixed(2);
};
export const mathRangeTech = (mosadRange: string): string => {
  const result = 100 - parseInt(mosadRange, 10);
  return result.toFixed(2);
};
