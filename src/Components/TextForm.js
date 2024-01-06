import React,{useState} from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const propTypes = {};

// const defaultProps = {};

const TextForm = (props) => {

    const [text,setText] = useState("Enter Text Here")

    const handleUpClick = ()=>{
        // console.log("You clicked the button : " + text)
        const newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("You clicked the button : " + text)
        const newText = text.toLowerCase()
        setText(newText)
    }

    const ClearClick = ()=>{
        // console.log("You clicked the button : " + text)
        const newText = ""
        setText(newText)
    }

    // const TitleCaseClick = ()=>{
    //     // console.log("You clicked the button : " + text)
    //     const words = text.split(" ");
    //     console.log(words)
    //     for (let i = 0; i < words.length; i++) {
    //         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    //     }

    //     words.join(" ");
    //     const newText = words
    //     setText(newText)
    // }

    const handleCopy=()=>{
        window.confirm("Test copied to clipbord")
        var text = document.getElementById('copyBtn')
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
    }
    const handleonChange = (event)=>{
        setText(event.target.value)
    }

    return (
        <>
            <div className='container my-3' style={props.style}>
                <h1>{props.heading}</h1>
                <div className="mb-1 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1'  onClick={handleLoClick}>Convert to LoweerCase</button>
                {/* <button className='btn btn-primary mx-1'  onClick={TitleCaseClick}>Convert to TitleCase</button> */}
                <button className='btn btn-primary mx-1'  onClick={ClearClick}>Clear</button>
                <button className='btn btn-primary mx-1 my-2' id='copyBtn' onClick={handleCopy}>CopyToClipBoard</button>
            </div>

            <div className="container" style={props.style}>
                <h1>Your text Summery</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <hr />
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

// TextForm.propTypes = {
     
// };
// TextForm.defaultProps = {
    
// };

export default TextForm;