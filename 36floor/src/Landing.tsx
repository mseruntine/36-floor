import { useState } from 'react'
import './Landing.css'
import LandingHeader from './components/LandingHeader.jsx'
import DrawerIcon from './components/DrawerIcon.jsx'
import LandingBackground from './components/LandingBackground.jsx'
import { Flex } from "@chakra-ui/react"

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flex direction="column" height="100%">
      <LandingHeader />
      <DrawerIcon />
      <LandingBackground />
    </Flex>
    </>
  )
}

export default Landing
