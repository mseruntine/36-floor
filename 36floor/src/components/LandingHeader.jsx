import { useState } from 'react';
import the36floor from '../assets/the36floor.JPG';
import reactLogo from '../assets/react.svg';
import './LandingHeader.css'

function LandingHeader() {
  const [count, setCount] = useState(0);

  console.log(the36floor, reactLogo); // Debugging

  return (
    <>
      {/* <p className="read-the-docs">This is the landing header!</p> */}
      <img src={the36floor} className="theLogo" alt="The 36th Floor" />
    </>
  );
}

export default LandingHeader;