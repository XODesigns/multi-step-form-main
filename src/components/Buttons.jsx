import React from 'react'

function Buttons({btnClass, name}) {
  return (
    <>

    <button className={btnClass} type='submit'>{name}</button>
    
    </>
  )
}

export default Buttons