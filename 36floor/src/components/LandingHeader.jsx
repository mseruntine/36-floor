import { useState } from 'react'

function LandingHeader() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">
        This is the landing header!
      </p>
    </>
  )
}

export default LandingHeader