import {
  getRandomInt,
  makeRandomLetters,
  makeRandomNumber,
} from "~/common/utils";

export function useRandom() {
  return {
    numbers(
      digits: number,
      padded: boolean = true,
      spread: boolean | number = false
    ) {
      return makeRandomNumber(digits, padded, spread);
    },
    letters(number: number) {
      return makeRandomLetters(number);
    },
    int(min: number, max: number) {
      return getRandomInt(min, max);
    },
  };
}
