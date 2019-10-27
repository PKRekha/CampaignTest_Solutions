/**This example illustrates most commonly used array elements from the array */

const compareArray = function (arr) {
  const tallyElements = (acc, index) => {
    if (!acc[index]) {
      acc[index] = 1;
      return acc;
    }

    acc[index] += 1;
    return acc;
  };

  const findTotal = arr.reduce(tallyElements, {});

  const keys = Object.keys(findTotal);

  const values = keys.map(x => findTotal[x]);

  const results = keys.filter(x => findTotal[x] === Math.max(...values));

  return results;
}