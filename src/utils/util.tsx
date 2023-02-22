export const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// https://bost.ocks.org/mike/shuffle/
export const shuffle = (array: string): string => {
  let currentIndex = array.length;
  let randomIndex;
  const result: Array<string> = [...array];

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }

  return result.reduce((prev, curr) => prev + curr, '');
};
