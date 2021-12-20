import { createCard } from "./createCard.js";
import { DECK } from "./deck.js";

let deck = DECK; //shuffle(DECK)

const flip = (suit, value, face) =>
  (event) => {
    console.log(suit, value, face);
    deck = deck.map((card) => {
      if (card.suit === suit && card.value === value) {
        console.log(suit, value, face, {
          ...card,
          face: face === "up" ? "down" : "up",
        });
        return { ...card, face: face === "up" ? "down" : "up" };
      } else {
        return card;
      }
    });

    console.log(deck);
  };

const appendChild = (element) => (child) => element.appendChild(child);

const main = () => {
  console.log("Card JS");

  const board = document.getElementById("board");

  deck.map(createCard).forEach(appendChild(board));
};

main();
