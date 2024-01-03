// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'


function App() {
  return (
    <>
      <Navbar title="Textutil"  />
      {/* <Navbar  /> */}
      <div className="container">
        {/* sample changes occured here below */}
        <TextForm  heading="Enter the text to Convert Lowercase to UpperCase Letter "/>
      </div>
      
    </>
  );
}




export default App;
