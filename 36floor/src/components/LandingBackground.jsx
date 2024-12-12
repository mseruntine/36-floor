import { useState } from 'react'
import './Landing.css'

function LandingBackground() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">
        This is the drawer icon!
      </p>
    </>
  )
}

export default LandingBackground
