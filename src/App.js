// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar title="Textutil"  />
      {/* <Navbar  /> */}
      <About/>
      <TextForm  heading="Enter the text to Convert Lowercase to UpperCase Letter "/>
      
      
    </>
  );
}




export default App;
