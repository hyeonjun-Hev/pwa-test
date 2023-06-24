function sumArrayValues(a) {
  return a.reduce((sum, currentValue) => sum + currentValue, 0);
}
function NumberOfChanges(difference, a) {
  let sumSmall = sumArrayValues(a);
  let index = 0;
  while (sumSmall < 25500) {
    sumSmall += difference[index];
    index++;
  }
  return index - 1;
}

export default NumberOfChanges;
