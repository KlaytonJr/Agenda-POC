import "./style.css"
import React from 'react'

function Button({ texto, onClick, secondary = false }) {
  return (
    <>
        <button
            className={`button ${secondary && 'secondary'}`} 
            onClick={onClick}
        >{ texto }</button>
    </>
  )
}

export default Button