import { SUITS, VALUES } from "./constants.js";

export const DECK = SUITS.reduce((deck, suit) => [
  ...deck,
  ...VALUES.map((value) => ({ suit, value, face: "up" })),
], []);
