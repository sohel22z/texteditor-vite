import React, { useState } from 'react'
import '../App.css'

export default function TextForm(props) {
    const [text, setText] = useState('');

    //set onChange Event...
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // Clear text
    const clearText = () => {
        setText('');
        props.showAlert("Text Cleared!", "success")
    }

    // Copy Text
    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!", "success")
    }

    // Uppercase
    const conToUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    // Lowercase
    const conToLw = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")

    }

    // Remove Extra Spaces
    const remSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")

    }
    
    return (
        <div className="container my-3">
            <div className='row'>
                <div className='col-lg-12'>
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label"><h3>Try TextEditor - word counter, character counter, remove extra spaces</h3></label>
                        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="6"></textarea>
                    </div>
                    <div>
                        <button disabled={text.length === 0} type="button" className="btn btn-warning my-1 mx-1" onClick={clearText}>Clear Text</button>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-1" onClick={copyText}>Copy to Clipboard</button>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-1" onClick={conToUp}>Uppercase</button>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-1" onClick={conToLw}>Lowercase</button>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-1" onClick={remSpaces}>Remove Extra Spaces</button>
                    </div>
                    <div className="my-3">
                        <h2>Your text summary</h2>
                        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                        <h2>Preview</h2>
                        <div className='text-wrap'>{text.length > 0 ? text : "Nothing to preview!"}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
