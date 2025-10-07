const lazyMagnitude = 3;

export const lazyCheck = (word: string, comparedTo: string) => {
  const lazyA = word.toLowerCase().replace(" ", "").split("").sort();
  const lazyB = comparedTo.toLowerCase().replace(" ", "").split("").sort();
  console.log(lazyA, lazyB);
  lazyA.forEach((letter) => {
    const index = lazyB.indexOf(letter);
    if (index >= 0) lazyB.splice(index, 1);
  });

  return lazyB.length < lazyMagnitude;
};
