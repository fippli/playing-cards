export const shuffle = (xs) => {
  let currentIndex = xs.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [xs[currentIndex], xs[randomIndex]] = [
      xs[randomIndex],
      xs[currentIndex],
    ];
  }

  return xs;
};
