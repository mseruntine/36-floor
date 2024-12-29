import { useState } from 'react'
import './styles/LandingBackground.css'
import { Box, Flex, Text, Image } from "@chakra-ui/react"

function LandingBackground() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Text className="background">
        This is the landing background!
      </Text>
    </>
  )
}

export default LandingBackground
