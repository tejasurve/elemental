import React from "react"
import './ButtonPrimary.css'
const ButtonPrimary = (props) => {
  return (
    <div className="button-12">
      <span className="span-11">{props.text || "Check"}</span>
    </div>
  )
}
export default ButtonPrimary

