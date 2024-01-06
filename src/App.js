// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About';
import React, { useState } from 'react';


function App() {
  const [accordianItem,setAccordianItem]=useState({
    color : 'black',
    // border:'2px solid',
    background:'transparent'
  })
  const [bordering,setbordering]=useState({
    color : 'black',
    // border:'2px solid',
    background:'transparent'
  })


  const [navStyle, setNavStyle] = useState({
    background: 'aqua',
    border: '2px solid light',
    color: 'black'
  })
  const changeMode = () => {
    if (navStyle.background === 'aqua') {
      document.body.style.background = "#2e2e2e"
      document.body.style.color = "white"
      setNavStyle({
        background: 'black',
        // border : '2px solid white',
        color: 'white'
      })

      setAccordianItem({
        color : 'white',
        border:'1px solid',
        background:'transparent'
      })
      setbordering({
        color : 'white',
        border:'1px solid',
        background:'#666',
        borderRadius: '8px'
      })
    }
    else {
      document.body.style.background = "white"
      document.body.style.color = "black"
      setNavStyle({
        background: 'aqua',
        color: 'black',
        // border : '2px solid white'
      })

      setAccordianItem({
        color : 'black',
        // border:'2px solid',
        background:'transparent'
      })
      setbordering({
        color : 'black',
        // border:'1px solid',
        background:'white'
      })
    }

  }
  return (
    <>
      <Navbar title="Textutil" changeMode={changeMode} style={navStyle} />
      {/* <Navbar  /> */}
      <About style_1={accordianItem} style_2={bordering}/>
      <TextForm heading="Enter the text to Convert Lowercase to UpperCase Letter " style={bordering}/>


    </>
  );
}




export default App;
