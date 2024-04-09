export function convertToSecond(milliseconds: number) {
  let res: string | number = milliseconds.toFixed(0);
  let minutes = Math.floor(Number(res) / 60);
  return `${formatNumber(minutes)}:${formatNumber(Number(res) % 60)}`;
}
export function curentPosition(milliseconds: number, duartion: number) {
  const result = (milliseconds / duartion) * 100;
  return Math.round(result);
}
export function sisaPosition(milliseconds: number, duartion: number) {
  const result = duartion - milliseconds;
  return Math.round(result / 100);
}

const formatNumber = (int: number) => {
  return int >= 10 ? int : `0${int}`;
};

console.log(sisaPosition(5.591999999999999, 240.4843125));
