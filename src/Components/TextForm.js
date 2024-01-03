import React,{useState} from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const propTypes = {};

// const defaultProps = {};

const TextForm = (props) => {

    const [text,setText] = useState("Enter Text Here")

    const handleUpClick = ()=>{
        console.log("You clicked the button : " + text)
        const newText = text.toUpperCase()
        setText(newText)
    }

    const handleonChange = (event)=>{
        setText(event.target.value)
    }

    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
    </div>);
}

// TextForm.propTypes = {
     
// };
// TextForm.defaultProps = {
    
// };

export default TextForm;