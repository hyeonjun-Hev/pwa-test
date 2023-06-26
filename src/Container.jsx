import PropTypes from "prop-types";
import ArrayDiff from "./functions/ArrayDiff";
import NumberOfChanges from "./functions/NumberOfChanges";
import ChangeValues from "./functions/ChangeValues";

const Container = (props) => {
  const sheet = [
    [2418, 2810, 2871, 2757, 2829, 2923, 2950, 2924, 2345, 2973],
    [2456, 2736, 2600, 3035, 2424, 2612, 2784, 2802, 2620],
    [2887, 2522, 2608, 2311, 2980, 3193, 2341, 2327, 2676],
  ];

  function sumArrayValues(a) {
    return a.reduce((sum, currentValue) => sum + currentValue, 0);
  }

  let sumArray = sheet.map((subArray) => sumArrayValues(subArray)); //sheet의 각 인덱스별 합

  function maxMin(sumArray) {
    const maxArr = Math.max(...sumArray);
    const minArr = Math.min(...sumArray);
    const maxArrIndex = sumArray.indexOf(maxArr);
    const minArrIndex = sumArray.indexOf(minArr);

    return [maxArrIndex, minArrIndex];
  }

  let maxMinIndex = maxMin(sumArray);

  let difference = ArrayDiff(sheet[maxMinIndex[0]], sheet[maxMinIndex[1]]); // 배열 타입 (큰 값과 작은 값의 차이)
  let changeNum = NumberOfChanges(
    difference,
    sheet[maxMinIndex[0]],
    sheet[maxMinIndex[1]]
  ); // 몇개의 값을 바꿔야 하는지 체크
  let CV = ChangeValues(
    changeNum,
    sheet[maxMinIndex[0]],
    sheet[maxMinIndex[1]]
  ); // 객체로 넘어옴

  console.log(maxMin(sumArray));

  // }

  // let difference = ArrayDiff(sheet[0], sheet[1]); // 배열 타입 (큰 값과 작은 값의 차이)
  // let changeNum = NumberOfChanges(difference, sheet[0], sheet[1]); // 몇개의 값을 바꿔야 하는지 체크
  // let CV = ChangeValues(changeNum, sheet[0], sheet[1]); // 객체로 넘어옴

  return (
    <div>
      <br />
      <br />
      <div>function area</div>
      {/* <div>두 배열간의 차의 배열 : {difference}</div> */}
      <div>바꿔야 하는 수 : {changeNum}</div>
      <div>
        바뀐 arr1 :
        {CV.arr1.map((data) => (
          <span>{data} / </span>
        ))}
      </div>
      <div>
        바뀐 arr2 :
        {CV.arr2.map((data) => (
          <span>{data} / </span>
        ))}
      </div>
      <div>
        바뀐 arr1 index :
        {CV.indexValueBig.map((data) => (
          <span>{data} / </span>
        ))}
      </div>
      <div>
        바뀐 arr2 index :
        {CV.indexValueSmall.map((data) => (
          <span>{data} / </span>
        ))}
      </div>

      <br />
      <br />
      <div>none change</div>
      <div>sheet1 Sum : {sumArrayValues(sheet[0])}</div>
      <div>sheet2 Sum : {sumArrayValues(sheet[1])}</div>
      <br />

      <div>change</div>
      <div>sheet1 SUM : {sumArrayValues(CV.arr1)}</div>
      <div>sheet2 SUM : {sumArrayValues(CV.arr2)}</div>
    </div>
  );
};

Container.propTypes = {};

export default Container;
