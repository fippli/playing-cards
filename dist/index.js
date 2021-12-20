const SPADES = {
  name: "spades",
  color: "black",
  unicode: {
    solid: "&#9824;",
    outline: "&#9828;",
  },
};
const HEARTS = {
  name: "hearts",
  color: "red",
  unicode: {
    solid: "&#9829;",
    outline: "&#9825;",
  },
};
const DIAMONDS = {
  name: "diamonds",
  color: "red",
  unicode: {
    solid: "&#9830;",
    outline: "&#9826;",
  },
};
const CLUBS = {
  name: "clubs",
  color: "black",
  unicode: {
    solid: "&#9827;",
    outline: "&#9831;",
  },
};
const SUITS = [
  HEARTS,
  SPADES,
  DIAMONDS,
  CLUBS,
];
const ACE = Object.freeze({
  name: "A",
  value: 1,
});
const TWO = Object.freeze({
  name: "2",
  value: 2,
});
const THREE = Object.freeze({
  name: "3",
  value: 3,
});
const FOUR = Object.freeze({
  name: "4",
  value: 4,
});
const FIVE = Object.freeze({
  name: "5",
  value: 5,
});
const SIX = Object.freeze({
  name: "6",
  value: 6,
});
const SEVEN = Object.freeze({
  name: "7",
  value: 7,
});
const EIGHT = Object.freeze({
  name: "8",
  value: 8,
});
const NINE = Object.freeze({
  name: "9",
  value: 9,
});
const TEN = Object.freeze({
  name: "10",
  value: 10,
});
const JACK = Object.freeze({
  name: "J",
  value: 11,
});
const QUEEN = Object.freeze({
  name: "Q",
  value: 12,
});
const KING = Object.freeze({
  name: "K",
  value: 13,
});
const VALUES = [
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
const identity = (x) => x;
const emptyColumn = (suit, ...classes) => `
  <div class="suit-column suit-medium ${classes.map(identity)}">
    <div class="transparent">${suit.unicode.solid}</div>
  </div>
`;
const twoColumn = (suit, ...classes) => `
  <div class="suit-column suit-medium ${classes}">
    <div class="">${suit.unicode.solid}</div>
    <div class="up-side-down down">${suit.unicode.solid}</div>
  </div>
`;
const threeColumn = (suit) => `
<div class="suit-column suit-medium">
  <div class="suit">${suit.unicode.solid}</div>
  <div class="suit">${suit.unicode.solid}</div>
  <div class="suit up-side-down">${suit.unicode.solid}</div>
</div>
`;
const fourColumn = (suit, ...classes) => `
<div class="suit-column ${classes}">
  <div class="suit">${suit.unicode.solid}</div>
  <div class="suit">${suit.unicode.solid}</div>
  <div class="suit up-side-down">${suit.unicode.solid}</div>
  <div class="suit up-side-down">${suit.unicode.solid}</div>
</div>
`;
const centerOneColumn = (suit) => `
  <div class="suit-center-column">
    <div>${suit.unicode.solid}</div>
  </div>
`;
const centerOneTopColumn = (suit) => `
  <div class="suit-center-column">
    <div>${suit.unicode.solid}</div>
    <div class="transparent">${suit.unicode.solid}</div>
  </div>
`;
const centerThreeTwoColumn = (suit) => `
  <div class="suit-center-column suit-medium">
    <div>${suit.unicode.solid}</div>
    <div class="up-side-down">${suit.unicode.solid}</div>
  </div>
`;
const centerFourTwoColumn = (suit) => `
  <div class="suit-center-column suit-column suit-medium">
    <div class="suit">${suit.unicode.solid}</div>
    <div class="suit up-side-down">${suit.unicode.solid}</div>
  </div>
`;
const suitCenter = ({ suit, value }) => {
  switch (value.name) {
    case ACE.name: {
      return `<div class="ace-center ${suit.color}">${suit.unicode.solid}</div>`;
    }
    case TWO.name: {
      return twoColumn(suit);
    }
    case THREE.name: {
      return threeColumn(suit);
    }
    case FOUR.name: {
      return `
        ${twoColumn(suit, "left-column")}
        ${emptyColumn(suit)}
        ${twoColumn(suit, "right-column")}
        `;
    }
    case FIVE.name: {
      return `
        ${twoColumn(suit)}
        ${centerOneColumn(suit)}
        ${twoColumn(suit)}
        `;
    }
    case SIX.name: {
      return `
       ${threeColumn(suit)}
       ${emptyColumn(suit)}
       ${threeColumn(suit)}
        `;
    }
    case SEVEN.name: {
      return `
        ${threeColumn(suit)}
        ${centerOneTopColumn(suit)}
        ${threeColumn(suit)}
        `;
    }
    case EIGHT.name: {
      return `
      ${threeColumn(suit)}
      ${centerThreeTwoColumn(suit)}
      ${threeColumn(suit)}
        `;
    }
    case NINE.name: {
      return `
        ${fourColumn(suit)}
        ${centerOneColumn(suit)}
        ${fourColumn(suit)}
        `;
    }
    case TEN.name: {
      return `
        ${fourColumn(suit, "left-column")}
        ${centerFourTwoColumn(suit)}
        ${fourColumn(suit, "right-column")}
        `;
    }
    case JACK.name: {
      return `<div class="ace-center ${suit.color}">&#9816;</div>`;
    }
    case QUEEN.name: {
      return `<div class="ace-center ${suit.color}">&#9813;</div>`;
    }
    case KING.name: {
      return `<div class="ace-center ${suit.color}">&#9812;</div>`;
    }
    default: {
      console.warn(value.name, "not implemented");
      return "";
    }
  }
};
const createCard = ({ suit, value, face }) => {
  const root = document.createElement("div");
  root.innerHTML = `
    ${
    face === "up"
      ? `<div class="suit-left ${suit.color}">
      ${value.name}<br/>
        ${suit.unicode.solid}
      </div>
      <div class="suit-center ${suit.color}">
        ${
        suitCenter({
          suit,
          value,
        })
      }
      </div>
      <div class="suit-right ${suit.color}">
        ${value.name}<br/>
        ${suit.unicode.solid}
      </div>`
      : `<div class="card-back"></div>`
  }
  `;
  root.className = "playing-card";
  root.onclick = flip(suit, value, face);
  return root;
};
const DECK = SUITS.reduce((deck, suit) => [
  ...deck,
  ...VALUES.map((value) => ({
    suit,
    value,
    face: "up",
  })),
], []);
let deck = DECK;
const flip = (suit, value, face) =>
  (event) => {
    console.log(suit, value, face);
    deck = deck.map((card) => {
      if (card.suit === suit && card.value === value) {
        console.log(suit, value, face, {
          ...card,
          face: face === "up" ? "down" : "up",
        });
        return {
          ...card,
          face: face === "up" ? "down" : "up",
        };
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
