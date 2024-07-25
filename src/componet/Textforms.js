import React, { useState } from 'react'



export default function Textforms(props) {

  const [text, setText] = useState("");

  const handleonchange = (event) => {
    // console.log("on change")
    setText(event.target.value)

  }

  const handleupclick = () => {
    // console.log("uppercase was click"+text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleclear = () => {
    let newText = ("");
    setText(newText)
  }
  const handlelower = () => {
    
    let newText = text.toLowerCase();
    setText(newText)
  }
  
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">

          <textarea className="form-control" id="Mybox"  style={{backgroundColor:props.mode==='dark'?'gray':'white'}}  value={text} onChange={handleonchange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert To Uppercase</button>
        <button className="btn btn-primary" onClick={handleclear}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handlelower}>Convert To Lowercase</button>


      </div>

      <div className="container my-8" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} character</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

    </>


  )
}
