/**
 * Suits
 */
export const SPADES = {
  name: "spades",
  color: "black",
  unicode: {
    solid: "&#9824;",
    outline: "&#9828;",
  },
};
export const HEARTS = {
  name: "hearts",
  color: "red",
  unicode: {
    solid: "&#9829;",
    outline: "&#9825;",
  },
};
export const DIAMONDS = {
  name: "diamonds",
  color: "red",
  unicode: {
    solid: "&#9830;",
    outline: "&#9826;",
  },
};
export const CLUBS = {
  name: "clubs",
  color: "black",
  unicode: {
    solid: "&#9827;",
    outline: "&#9831;",
  },
};

export const SUITS = [HEARTS, SPADES, DIAMONDS, CLUBS];

/**
 * Values
 */
export const ACE = Object.freeze({
  name: "A",
  value: 1, // | 14
});

export const TWO = Object.freeze({
  name: "2",
  value: 2,
});

export const THREE = Object.freeze({
  name: "3",
  value: 3,
});

export const FOUR = Object.freeze({
  name: "4",
  value: 4,
});

export const FIVE = Object.freeze({
  name: "5",
  value: 5,
});

export const SIX = Object.freeze({
  name: "6",
  value: 6,
});

export const SEVEN = Object.freeze({
  name: "7",
  value: 7,
});

export const EIGHT = Object.freeze({
  name: "8",
  value: 8,
});

export const NINE = Object.freeze({
  name: "9",
  value: 9,
});

export const TEN = Object.freeze({
  name: "10",
  value: 10,
});

export const JACK = Object.freeze({
  name: "J",
  value: 11,
});

export const QUEEN = Object.freeze({
  name: "Q",
  value: 12,
});

export const KING = Object.freeze({
  name: "K",
  value: 13,
});

export const VALUES = [
  ACE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
];
