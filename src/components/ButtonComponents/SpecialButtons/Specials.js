import React, {useState} from "react";
import {specials} from '../../../data.js';
import SpecialButton from '../SpecialButtons/SpecialButton.js';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState(specials)
  const clickSpecial = (special) => {
    console.log(`${special} button clicked!`)
  }

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {special.map(special => <div key={special}><SpecialButton special={special} clickSpecial={clickSpecial} /></div>)}
    </div>
  );
};

export default Specials;