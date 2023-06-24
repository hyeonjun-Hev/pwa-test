function ChangeValues(index, arr1, arr2) {
  const indexValueBig = [];
  const indexValueSmall = [];
  const maxValues = [];
  const minValues = [];
  for (let i = 0; i < index; i++) {
    //max값의 인덱스와 min값의 인덱스를 구한다.
    const maxVal1 = Math.max(...arr1);
    const minVal2 = Math.min(...arr2);
    const maxIndex1 = arr1.indexOf(maxVal1);
    const minIndex2 = arr2.indexOf(minVal2);

    //구한 인덱스를 통해서 두 배열을 교환한다.
    let tmp = arr1[maxIndex1];
    arr1[maxIndex1] = arr2[minIndex2];
    arr2[minIndex2] = tmp;

    indexValueBig.push(maxIndex1);
    indexValueSmall.push(minIndex2);

    maxValues.push(maxVal1);
    minValues.push(minVal2);

    arr1 = arr1.filter((value) => !maxValues.includes(value));
    arr2 = arr2.filter((value) => !minValues.includes(value));
  }

  //   console.log("max : " + arr1);
  //   console.log("min : " + arr2);
  //   console.log(indexValueBig);
  //   console.log(indexValueSmall);

  return { arr1, arr2, indexValueBig, indexValueSmall };
}

export default ChangeValues;
