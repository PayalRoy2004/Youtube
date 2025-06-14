import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <React.Fragment>
      <Link to="/">
      <img className="h-15 w-24 mx-2 mr-[15rem] my-2" src='https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png' alt='navigation icon'/>
      </Link>
    </React.Fragment>
      
  )
}

export default Logo