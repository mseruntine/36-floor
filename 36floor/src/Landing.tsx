import { useState } from 'react'
import './Landing.css'
import LandingHeader from './components/LandingHeader.jsx'
import LandingBackground from './components/LandingBackground.jsx'
import { Flex } from "@chakra-ui/react"

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flex direction="column" height="100%">
      <LandingHeader />
      <LandingBackground />
    </Flex>
    </>
  )
}

export default Landing
