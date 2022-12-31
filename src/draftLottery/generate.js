/**
 * Returns a random item from the data based on its weight
 */
const selectWeightedItem = data => {
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
    total += Number(data[i].percentage);
  }

  const threshold = Math.random() * total;

  total = 0; 
  for (let i = 0; i < data.length - 1; ++i) {
    total += Number(data[i].percentage);
    if (total >= threshold) {
      return data[i].name;
    }
  }

  // default value
  return data[data.length - 1].name;
};

const generate = data => {
  let initialData = data;
  const resultsList = [];

  while(initialData.length > 0) {
    const selected = selectWeightedItem(initialData);
    initialData = initialData.filter(item => {
      return item.name !== selected;
    })

    resultsList.push(selected);
  }

  return resultsList;
};

export { generate };