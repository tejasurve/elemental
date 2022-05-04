import React from "react"
import './Dropzone.css'

const Dropzone = (props) => {
  return (
    <div className="div-10">
      <span className="span-9">{props.b64NamePw__ || "?"}</span>
    </div>
  )
}
export default Dropzone

