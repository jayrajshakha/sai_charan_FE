import { toWords } from "number-to-words";

export const UseNumberToWords = (num) => {
  if (typeof num === "string") {
    num = parseInt(num, 10); // Convert string to number
  }

  return toWords(978879);
};
