import { useState } from 'react';
import the36floor from '../assets/the36floorWhite.jpg';
import reactLogo from '../assets/react.svg';
import './styles/LandingHeader.css'
import DrawerIcon from './DrawerIcon.jsx'
import Socials from './Socials.jsx'
import { Box, Flex, Text, Image } from "@chakra-ui/react"

function LandingHeader() {
  const [count, setCount] = useState(0);

  console.log(the36floor, reactLogo); // Debugging

  return (
    <>
        <Box w="100%" h="100%">
          <Flex w="100%" justify="center" align="center" textAlign="center" align-items="center" direction="column">
            <Flex w="40%" paddingTop={"7%"}>
              <Image src={the36floor}></Image>
            </Flex>
            <Flex w="50%">
              <DrawerIcon />
            </Flex>
          </Flex>
          <Flex justifyContent={"center"}>
            <Socials />
          </Flex>
          <Flex textAlign="center" >
              <Flex h={40} w={"100%"} direction="column" alignItems="center" justifyContent="space-evenly">
                <Text color="black" fontWeight={"bold"} textStyle={"2xl"} >shaking up the underground</Text>
                <Text color="black" fontWeight={"bold"} textStyle={"3xl"} >New Orleans | Houston</Text>
              </Flex>
          </Flex>
        </Box>
    </>
  );
}

export default LandingHeader;