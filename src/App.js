// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App(props) {
  return (
    <>
 
 <Navbar title="TextUtiles"/>
 <div className="container my-3">
 <TextForm heading="Enter the text to analyze"/>
 </div>
    </>
  );
}

export default App;
