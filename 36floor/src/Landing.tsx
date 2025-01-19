import { useState } from 'react'
import './Landing.css'
import LandingHeader from './components/LandingHeader.jsx'
import LandingBackground from './components/LandingBackground.jsx'
import BandsInTownWidget from './components/BandsInTownWidget.jsx'
import ContactForm from './components/ContactForm.tsx'
import { Flex } from "@chakra-ui/react"

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flex direction="column" height="100%">
      <LandingHeader />
      <LandingBackground />
      <BandsInTownWidget />
      <LandingBackground />
      <ContactForm />
    </Flex>
    </>
  )
}

export default Landing
