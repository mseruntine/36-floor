import { useState } from 'react';
import the36floor from '../assets/the36floor.JPG';
import reactLogo from '../assets/react.svg';
import './LandingHeader.css'
import { Text } from "@chakra-ui/react"

function LandingHeader() {
  const [count, setCount] = useState(0);

  console.log(the36floor, reactLogo); // Debugging

  return (
    <>
      <img src={the36floor} className="theLogo" alt="The 36th Floor" />
      <Text>shaking up the underground</Text>
    </>
  );
}

export default LandingHeader;