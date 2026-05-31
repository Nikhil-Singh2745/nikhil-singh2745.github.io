const ROMAN_TABLE: Array<[number, string]> = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function toRoman(n: number): string {
  if (n <= 0) return "";
  let result = "";
  let remainder = Math.floor(n);
  for (const [value, symbol] of ROMAN_TABLE) {
    while (remainder >= value) {
      result += symbol;
      remainder -= value;
    }
  }
  return result;
}

const MONTHS_SHORT = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export function formatEntryDate(date: Date): string {
  const month = MONTHS_SHORT[date.getUTCMonth()];
  const day = toRoman(date.getUTCDate());
  const year = toRoman(date.getUTCFullYear());
  return `${month} · ${day} · ${year}`;
}

export function formatIso(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function formatShortDate(date: Date): string {
  const month = MONTHS_SHORT[date.getUTCMonth()];
  return `${date.getUTCDate().toString().padStart(2, "0")} ${month} ${date.getUTCFullYear()}`;
}
