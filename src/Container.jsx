import React, { useState } from "react";
import PropTypes from "prop-types";
import ArrayDiff from "./functions/ArrayDiff";
import NumberOfChanges from "./functions/NumberOfChanges";

const Container = (props) => {
  const arr1 = [2418, 2810, 2871, 2757, 2829, 2923, 2950, 2924, 2345, 2973];
  const arr2 = [2456, 2736, 2600, 3035, 2424, 2612, 2784, 2802, 2620];
  let difference = ArrayDiff(arr1, arr2); // 배열 타입 (큰 값과 작은 값의 차이)

  return (
    <div>
      <br />
      <br />
      <div>function area</div>
      {/* <div>두 배열간의 차의 배열 : {difference}</div> */}
      <div>바꿔야 하는 수 : {NumberOfChanges(difference, arr2)}</div>
    </div>
  );
};

Container.propTypes = {};

export default Container;
