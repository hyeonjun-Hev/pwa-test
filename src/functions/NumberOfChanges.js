function sumArrayValues(a) {
  return a.reduce((sum, currentValue) => sum + currentValue, 0);
}
function NumberOfChanges(difference, maxArr, minArr) {
  let sumSmall = sumArrayValues(minArr);
  let sumMax = sumArrayValues(maxArr);
  let index = 0;
  while (sumMax > 25500 && sumSmall < 25500) {
    // max가 25500 이하로 떨어지자마자 while 탈출
    sumSmall += difference[index];
    index++;
  }
  return index - 1;
}

export default NumberOfChanges;
