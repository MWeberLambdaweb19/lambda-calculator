import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {props.clickNumberProp(props.number)}}>{props.numberProp}</button>
    </>
  );
};

export default NumberButton;