const lazyMagnitude = 3;

/**
 *
 * @param {string} word
 * @param {string} comparedTo
 * @returns {boolean}
 */
export const lazyCheck = (word, comparedTo) => {
  const lazyA = word.toLowerCase().replace(" ", "").split("").sort();
  const lazyB = comparedTo.toLowerCase().replace(" ", "").split("").sort();
  console.log(lazyA, lazyB);
  lazyA.forEach((letter) => {
    const index = lazyB.indexOf(letter);
    if (index >= 0) lazyB.splice(index, 1);
  });

  return lazyB.length < lazyMagnitude;
};
