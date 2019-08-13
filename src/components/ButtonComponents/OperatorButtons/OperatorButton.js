import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {props.clickOperator(props.operator)}}>{props.operator}</button>
    </>
  );
};

export default OperatorButton;