import React from "react"
import DragAndDropElements from "./components/DragAndDropElements"
import Dropzone from "./components/Dropzone"
import ButtonSecondary from "./components/ButtonSecondary"
import ButtonPrimary from "./components/ButtonPrimary"

import './Selection.css'
import help from "./help.svg"


const App = (props) => {
  return (
    <div>
      <div className="div-2">
        <span className="span-1">Question 4</span>
        <div className="div-3">
          <span className="span-2">Drag and drop to fill in the blanks.</span>
          <img className="img-1" src={help} />
        </div>
        <div className="div-4">
          <DragAndDropElements text="mobile" style={{width:'100%'}} />
          <DragAndDropElements text="voltage" />
          <DragAndDropElements text="delocalised" />
        </div>
       <div >
       <span className="span-3">
          Explain why metals are good conductors of electricity.
        </span>
       </div>
        
        <div className="div-5">
          <span className="span-4">Metals have</span>
          <Dropzone b64NamePw__="?" />
          <span className="span-5">electrons that are highly</span>
          <Dropzone b64NamePw__="?" />
        </div>
        <div className="div-6">
          <span className="span-6">
            and can move through the metal structure in response to applied
          </span>
          <div className="div-7">
            <Dropzone b64NamePw__="?" />
            <span className="span-7">.</span>
          </div>
        </div>

        <div className="div-8">
          <ButtonSecondary text="Solution" />
          <ButtonPrimary text="Check" />
        </div>
      </div>
    </div>
  )
}
export default App
