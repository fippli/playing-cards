import {
  ACE,
  EIGHT,
  JACK,
  KING,
  NINE,
  QUEEN,
  SEVEN,
  SIX,
  TEN,
  TWO,
} from "./constants.js";
import { identity } from "./identity.js";

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

export const createCard = ({ suit, value, face }) => {
  const root = document.createElement("div");
  root.innerHTML = `
    ${
    face === "up"
      ? `<div class="suit-left ${suit.color}">
      ${value.name}<br/>
        ${suit.unicode.solid}
      </div>
      <div class="suit-center ${suit.color}">
        ${suitCenter({ suit, value })}
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
