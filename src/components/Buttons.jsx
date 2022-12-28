import React from 'react'

function Buttons({btnClass, name, click}) {
  return (
    <>

    <button className={btnClass} type='submit' onClick={click}>{name} </button>
    
    </>
  )
}

export default Buttons