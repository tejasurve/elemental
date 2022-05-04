import React from "react"
import './ButtonSecondary.css'
const ButtonSecondary = (props) => {
  return (
    <div className="button-11">
      <span className="span-10">{props.text || "Solution"}</span>
    </div>
  )
}
export default ButtonSecondary

