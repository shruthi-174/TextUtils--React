import { useState } from "react";
import React from "react";

export default function TextForm(props) {

  // start- CONVERT WORDS TO UPPERCASE
  const handleUpClicked = () => {
    console.log("UPPercase was clicked" + text); //whenever uppercase button will be clicked

    let newText = text.toUpperCase();
    setText(newText); //message will print in console
  props.showAlert("converted to uppercase", "success")
  };
  // CLeAR TEXT
  const handleCleClicked = () => {
    console.log("Clear was clicked" + text); //whenever uppercase button will be clicked

    let newText = ' '
    setText(newText); //message will print in console
    props.showAlert("Text is cleared", "success")
  };

  // start- CONVERT WORDS TO lower
  const handleLowClicked = () => {
    console.log("Lowercase was clicked" + text); //whenever uppercase button will be clicked

    let newText = text.toLowerCase();
    setText(newText); //message will print in console
    props.showAlert("converted to Lowercase", "success")
  };
  

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value); //inn order to write in textarea
  };
  const [text, setText] = useState(" ");
  // setText("NEW TEXT")   to add new text

  return (
    <div className="conatiner" style={{color:props.mode==='dark'?'white' : 'black'}}>
      <h1 className="my-2">{props.heading}</h1>
      <div className="mb-4 ">
        <label htmlFor="exampleFormControlInput1" className="form-label"></label>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(26, 27, 92)' : 'white', color:props.mode==='dark'?'white' : 'black'}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleUpClicked}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClicked}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCleClicked}>
        Clear text
      </button>
      <div className="container my-3" style={{color:props.mode==='dark'?'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h1>Preview</h1>
        <p>{text.length>0 ? text:"Nothing to Preview"}</p>
      </div>
    </div>
  );
}
