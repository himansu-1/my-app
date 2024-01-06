// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About';
import React,{useState} from 'react';


function App() { 
  const [navStyle,setNavStyle] = useState({
      background: 'aqua',
      border: '2px solid light',
      color : 'black'
  })
  const changeMode = ()=>{
    if (navStyle.background === 'aqua') {
      setNavStyle({
        background : 'black',
        // border : '2px solid white',
        color : 'white'

      })
    }
    else {
      setNavStyle({
        background : 'aqua',
        color : 'black',
        // border : '2px solid white'

      })
    }

  }
  return (
    <>
      <Navbar title="Textutil" changeMode={changeMode} style={navStyle}/>
      {/* <Navbar  /> */}
      <About/>
      <TextForm  heading="Enter the text to Convert Lowercase to UpperCase Letter "/>
      
      
    </>
  );
}




export default App;
