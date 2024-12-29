import { useState } from 'react';
import the36floor from '../assets/the36floor.JPG';
import reactLogo from '../assets/react.svg';
import './LandingHeader.css'
import { Flex, Text, Image } from "@chakra-ui/react"

function LandingHeader() {
  const [count, setCount] = useState(0);

  console.log(the36floor, reactLogo); // Debugging

  return (
    <>
        <Flex w="100%" justify="center" align="center" textAlign="center" align-items="center" direction="column">
          <Image src={the36floor}></Image>
        </Flex>
        <Flex w="100%" textAlign="center" direction="column">
          <Text color="black" >shaking up the underground</Text>
        </Flex>
    </>
  );
}

export default LandingHeader;