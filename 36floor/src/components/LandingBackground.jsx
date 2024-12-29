import { useState } from 'react'
import './LandingBackground.css'

function LandingBackground() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="background">
        This is the landing background!
      </p>
    </>
  )
}

export default LandingBackground
