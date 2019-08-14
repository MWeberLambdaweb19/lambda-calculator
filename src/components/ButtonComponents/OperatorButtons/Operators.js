import React, {useState} from "react";
import {operators} from '../../../data.js'
import OperatorButton from './OperatorButton.js';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operators)
  const clickOperator = (operator) => {
    console.log(`'${operator}' button clicked!`)
  }
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operator.map(operator => <div key={operator.char}><OperatorButton operator={operator.char} clickOperator={clickOperator}/></div>)}
    </div>
  );
};

export default Operators;