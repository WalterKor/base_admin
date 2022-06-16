import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div>
        <Link to="/join">join</Link>
        <br/>
        <Link to="/login">login</Link>
    </div>
  )
}

export default LandingPage