import React, { useState } from "react";
import PropTypes from "prop-types";

const Container = (props) => {
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

  return (
    <div>
      <br />
      <br />
      <div>function area</div>
      <div>{SortingContainer(arr1, arr2)}</div>
    </div>
  );
};

Container.propTypes = {};

export default Container;
