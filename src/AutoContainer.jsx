import React, { useEffect } from "react";
import PropTypes from "prop-types";

const AutoContainer = (props) => {
  useEffect(() => {});
  const arr1 = [2418, 2810, 2871, 2757, 2829, 2923, 2950, 2924, 2345, 2973];
  const arr2 = [2456, 2736, 2600, 3035, 2424, 2612, 2784, 2802, 2620];

  const ownArr = [...arr1];
  const ownArr2 = [...arr2];

  let sortArr1 = arr1.sort();
  let sortArr2 = arr2.sort();

  const arrSum1 = arr1.reduce(function add(sum, currValue) {
    return sum + currValue;
  });

  const arrSum2 = arr2.reduce((sum, currValue) => {
    return sum + currValue;
  });

  //각 배열의 합을 모두 구한다. 그리고 그 합을 하나하나 검사한다.

  //

  return (
    <div>
      {/* <div>
        {sortArr1.map((a) => {
          return <>{a} / </>;
        })}
      </div>
      <div>
        {sortArr2.map((a) => {
          return <>{a} / </>;
        })}
      </div> */}
      <div>
        <p>{arrSum1}</p>
      </div>
      <div>
        <p>{arrSum2}</p>
      </div>
      {/* <div>
        <p>{ownArr}</p>
        <p>{ownArr2}</p>
      </div> */}
    </div>
  );
};

AutoContainer.propTypes = {};

export default AutoContainer;
