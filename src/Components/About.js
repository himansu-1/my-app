import React,{useState} from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const propTypes = {};

// const defaultProps = {};
// const [OutLineBox,setOutLineBox] = useState()

// const EnableDMode = ()=>{

// }

const About = () => {
    const [DarkMEnable,setDarkMEnable]=useState({
        background: 'white',
        color: 'black',
        border: '2px solid white',
    })
    const [DarkMBtn,setDarkMBtn] = useState({
        background: 'dark',
        color: 'white',
        border: '2px solid red',
        fontSize: 'large'
    })
    const [btnText,setBtnText] = useState("Dark Mode")

    const EnableMode = ()=>{
        if (DarkMEnable.color === 'white') {
            setDarkMEnable({
                background: 'white',
                color: 'black',
                border: '2px solid white',
                fontSize: 'large'
            })
            setDarkMBtn({
                background: 'black',
                color: 'white',
                border: '2px solid red',
                fontSize: 'large'
            })
            setBtnText("Dark Mode")
        }
        else{
            setDarkMEnable({
                background: 'black',
                color: 'white',
                border: '2px solid white',
            })
            setDarkMBtn({
                background: '#2f3cff',
                color: 'black',
                border: '2px solid white',
                fontSize: 'large'
            })
            setBtnText("Light Mode")

        }

    }
    

    return (
        <>
            <div className="container my-2 " style={DarkMEnable}>
                <h1 >Abour My Website</h1>
                <div className="accordion 5 my-2" id="accordionExample" >
                    <div className="accordion-item" style={DarkMEnable}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={DarkMEnable}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={DarkMEnable}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={DarkMEnable}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item " style={DarkMEnable}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={DarkMEnable}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-2 textalign-center text-center" >
                    <button type="button" class="btn btn-dark" onClick={EnableMode} style={DarkMBtn}>{btnText}</button>

                </div>
            </div>
        </>
    );
}

// About.propTypes = propTypes;
// About.defaultProps = defaultProps;
// #endregion

export default About;