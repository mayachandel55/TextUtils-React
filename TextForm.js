import React, { useState } from 'react'



export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnClear = () => {
    let newText = '';
    setText(newText)
  }

  //const handleOnClick = ()=>{
  //let newText = text.italics();
  //setText(newText)
  //}


  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value)
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState('');
  //setText("new text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClear}> clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h1>your text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

