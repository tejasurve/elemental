import React from "react"

import group7156 from "./group7156.svg"
import './DragAndDropElements.css'
const DragAndDropElements = (props) => {
  return (
    <div className="button-9">
      <span className="span-8">{props.text || "mobile"}</span>
      <img className="img-4" src={group7156} />
    </div>
  )
}
export default DragAndDropElements
