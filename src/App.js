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
        <TextForm  heading="Enter the text to Analyze"/>
      </div>
      
    </>
  );
}




export default App;
