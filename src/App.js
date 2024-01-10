// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }


  const [accordianItem, setAccordianItem] = useState({
    color: 'black',
    // border:'2px solid',
    background: 'transparent'
  })
  const [bordering, setbordering] = useState({
    color: 'black',
    // border:'2px solid',
    background: 'transparent',
    textAlign:'left'
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
        color: 'white',
        border: '1px solid',
        background: 'transparent'
      })
      setbordering({
        color: 'white',
        border: '1px solid',
        background: '#666',
        borderRadius: '8px'
      })
      // setInterval(() => {
      //   document.title = "MyProject-DarkMode"
      // }, 2000);
      showAlert("Success", "DarkMode is Enabled")
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
        color: 'black',
        // border:'2px solid',
        background: 'transparent'
      })
      setbordering({
        color: 'black',
        // border:'1px solid',
        background: 'white'
      })
      // setInterval(() => {
      //   document.title = "MyProject-LightkMode"
      // }, 1500);
      showAlert("Success", "DarkMode is Disabled")
    }
  }
  return (
    <>

      <Router>
        <Navbar title="Textutil" changeMode={changeMode} style={navStyle} />
        {/* <Navbar  /> */}
        <Alert alert={alert} />
        <div className="App">

          <Routes>
            <Route exact path="/" element={
              <>
                <About style_1={accordianItem} style_2={bordering} />
                <TextForm heading="Enter the text to Convert Lowercase to UpperCase Letter " style={bordering} showAlert={showAlert} />
              </>
            }>
            </Route>
            <Route exact path="/about" element={<About style_1={accordianItem} style_2={bordering} />}>

            </Route>
            <Route exact path="/home" element={<TextForm heading="Enter the text to Convert Lowercase to UpperCase Letter " style={bordering} showAlert={showAlert} />}>

            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}




export default App;
