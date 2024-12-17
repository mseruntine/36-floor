import { useState } from 'react'
import the36floor from 'assets/the36floor.JPG'
import reactLogo from './assets/react.svg'

function LandingHeader() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">
        This is the landing header!
      </p>
      <img src={the36floor} className="logo react" alt="React logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
    </>
  )
}

export default LandingHeader
