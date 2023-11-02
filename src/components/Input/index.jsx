import "./style.css"
import React from 'react'

function Input({ label, placeholder, type, value, onChange }) {
  return (
    <div style={{ width: "100%", margin: "10px 0" }}>
        <label className="label" >{ label }</label>
        <input 
            value={value}
            placeholder={placeholder}
            type={type || "text"}
            className="input" 
            onChange={event => onChange(event.target.value)}
        />
    </div>
  )
}

export default Input