import React, { useState } from "react";
import PropTypes from "prop-types";

const Container = (props) => {
  /**
   * 시나리오
   * 사용자가 한 시트를 추가한다.
   * 추가한 시트에서는 13개의 값이 들어온다
   * 그 값을 다 더한값이 24500 ~ 25500 사이에 있어야 한다.
   * 사잇값이 아닌경우, 타 시트의 값과 교환해야한다.
   * 교환된 값은 어느 시트의 값과 교환 되었는지 체크해야한다.
   *
   * 1. 교환이 적게 일어나야 한다.
   */

  /**
   * 들어온 13개의 값을 우선 더한다
   *    더하면서 각 배열마다 state를 선언한다
   * 24500~25500 사잇값인지 체크한다
   * 사잇값이 아닐경우, state를 false로 바꿔준다.
   *
   * Case_1
   * 25500이 넘고, 가장 큰 값을 체크한다 (false인 배열중에서)
   *    false인 배열중에서 가장 작은 값을 체크한다 -> 가장 작은 값이 25500이 넘을경우, true에서 찾는다
   *
   * 일단 찾았다고 가정하고, 두 배열에서 가장 큰 값과, 가장 작은 값을 빼고 배열에 저장한다
   * 저장된 값을 작은 쪽 토탈 값에 더한다. -> 25500이 넘기 직전까지
   * 직전까지 카운트 된 index 값을 토대로 양쪽 값을 바꾼다
   * 작았던 state는 true로 바꿔주고, 컸던 값은 사잇값인지 재확인 한다
   *    사잇값이 아닐시에는 위 과정을 다시 반복한다
   * 컸던 값이 사잇값에 들어왔을시에는 그다음 false를 찾는다
   *
   * Case_2
   * 25500이 넘는값이 없고, 24500 미만인 값만 나올경우
   * 가장 큰 값을 체크
   * 두배열에서 가장 큰 값과 가장 작은 값을 빼고 배열에 저장
   * 저장된 값을 큰쪽 토탈값에서 뺀다 -> 24500보다 작아질때까지
   * 직전까지 카운트 된 index 값을 토대로 양쪽 값을 바꾼다
   *    사잇값인지 체크하고, 사잇값이 아닌경우에는 위 과정을 다시 반복한다
   *
   *
   *
   */

  /**
   * 배열 맨 앞에 해당 시트의 인덱스를 달아 놓는다면?
   * [0, ...입력된 값들]
   */
  // function test() {
  //   if ("") {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  // }

  const arr1 = [2418, 2810, 2871, 2757, 2829, 2923, 2950, 2924, 2345, 2973];
  const arr2 = [2456, 2736, 2600, 3035, 2424, 2612, 2784, 2802, 2620];

  function SortingContainer(arr1, arr2) {
    const arrOrigin1 = [
      2418, 2810, 2871, 2757, 2829, 2923, 2950, 2924, 2345, 2973,
    ];
    const arrOrigin2 = [2456, 2736, 2600, 3035, 2424, 2612, 2784, 2802, 2620];
    // index 값을 추출하기 위한 오리진 배열

    const diffValue = [];
    const indexValueBig = [];
    const indexValueSmall = [];
    const maxValues = [];
    const minValues = [];

    // let [maxVal, setMaxVal] = useState([]);
    /**
     *1. max - min 한 값들을 저장
     *2. 저장된 값을 작았던 arr에 더함. (25500이 넘기 전까지)
     *3.  넘기전까지 카운트된 값을 토대로 배열을 교환함
     *4.  큰 배열을 다시 다 더해보고, 범위 확인
     *5.  반복
     */
    //1. max - min 한 값들을 저장

    arr2.map(() => {
      const maxVal1 = Math.max(...arr1);
      const maxIndex1 = arrOrigin1.indexOf(maxVal1);
      const minVal2 = Math.min(...arr2);
      const minIndex2 = arrOrigin2.indexOf(minVal2);
      // maxVal을 제외한 나머지 값들을 필터링하여 새로운 배열 생성
      let difference = maxVal1 - minVal2;
      diffValue.push(difference); //차이 값이 들어가있다

      indexValueBig.push(maxIndex1);
      indexValueSmall.push(minIndex2);

      maxValues.push(maxVal1);
      minValues.push(minVal2);

      // console.log(maxVal1);
      // console.log("maxVal1-" + "minVal2 " + maxVal1 + " - " + minVal2);
      // console.log(maxVal1 - minVal2);

      arr1 = arr1.filter((value) => !maxValues.includes(value));
      arr2 = arr2.filter((value) => !minValues.includes(value));
    });

    return <div>{/* {console.log(diffValue)} */}</div>;
  }

  //2. 저장된 값을 작았던 arr에 더한다.
  function sumArrayValues(arr) {
    return arr.reduce((sum, currentValue) => sum + currentValue, 0);
  }

  let sumArray = sumArrayValues(arr2);

  while (sumArray > 25500) {
    let i = 0;
    sumArray += diffValue[i];
    i++;
    console.log(sumArray);
  }

  //이전에 maxValue값으로 된 값들을 모두 filter에서 걸러줘야한다.

  return (
    <div>
      {/* {test()} */}

      {/* <div>
        maxVal1 : {maxVal1}
        <br />
        maxIndex1 : {maxIndex1}
      </div>

      <div>
        minVal2 :{minVal2}
        <br />
        minIndex2 : {minIndex2}
      </div>

      <div>
        secondMaxVal : {secondMaxVal}
        <br />
        thirdMax : {thirdMax}
        <br />
        {rValues}
      </div> */}
      <br />
      <br />
      <div>function area</div>
      <div>{SortingContainer(arr1, arr2)}</div>
    </div>
  );
};

Container.propTypes = {};

export default Container;
