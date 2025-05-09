import React from 'react'
import Button from "./Button";
import Cards from "./Cards";

const InnerContainer = () => {
  return (
    <div className='w-4/5 bg-slate-400'> 
      <Button/>
      <Cards/>
    </div>
  )
}

export default InnerContainer
