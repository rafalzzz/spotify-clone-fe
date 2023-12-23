const createNumberArray = (n: number): number[] => Array.from({ length: n }, (_, i) => i);

const shuffleArray = (array: number[]): number[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const getShuffledIndexes = (arrayLength: number): number[] => {
  const indexes = createNumberArray(arrayLength);
  const shuffledIndexes = shuffleArray(indexes);
  return shuffledIndexes;
};
