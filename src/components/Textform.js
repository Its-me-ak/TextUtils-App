import React, { useState } from "react";

export default function Textform(props) {
  const changeToUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
  };

  const changeToLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "success");
  };

  const clearText = () => {
    let clearText = '';
    setText(clearText);
    props.showAlert("Text clear successfully", "success");
  }

  const removeSpace = () => {
    let extraText = text.split(/[ ]+/);
    setText(extraText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  }

  const copyText = () => {
    let text = document.querySelector('#myBox');
    text.select();
    text.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");

  }

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = "New text";  Wrong way to change the state
  // setText("New Text"); Wrong way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#031624" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={changeToUpper}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={changeToLower}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary my-2" onClick={removeSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary my-2" onClick={clearText}>
          Clear Text
        </button>

        <h3 className="mt-5 mb-3">Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Time to read: {0.008 * text.split(" ").length} minutes</p>
      </div>
    </>
  );
}
