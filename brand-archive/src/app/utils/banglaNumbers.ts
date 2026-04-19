// Convert English numerals to Bangla numerals
const banglaDigits: { [key: string]: string } = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯'
};

export function toBanglaNumber(num: number | string): string {
  return String(num)
    .split('')
    .map(char => banglaDigits[char] || char)
    .join('');
}

// Format large numbers with Bangla numerals
export function formatBanglaNumber(num: number): string {
  return toBanglaNumber(num.toLocaleString('en-US'));
}
