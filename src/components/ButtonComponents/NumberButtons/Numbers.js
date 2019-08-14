import React, {useState} from "react";
import {numbers} from '../../../data.js'
import NumberButton from './NumberButton.js';
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers)

  const clickNumber = (number) => {
    console.log(`#${number} clicked!`)
  }

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {number.map(number => <div key={number}><NumberButton numberProp={number} clickNumberProp={clickNumber} /></div>)}
    </div>
  );
};

export default Numbers;