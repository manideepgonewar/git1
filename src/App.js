// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App(props) {
  const[mode ,setMode] = useState('light');
  const[alert ,Setalert] = useState(null);

 const showalert = (message ,type) =>{
    Setalert({
      msg : message ,
      type :type
    })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743' 
      showalert("dark mode has been enabled" ,"success");
    } else {
     
      setMode('light'); 
        document.body.style.backgroundColor = 'white'
        showalert("light mode has been enabled" ,"success");
    }
  }
  setTimeout(() => {
    Setalert(null);
  }, 3000);
  return (
    <>
 
 <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
 <div className="container my-3">
 <TextForm heading="Enter the text to analyze" showalert={showalert} mode={mode}/>
 {/* <About/> */}
 </div>
    </>
  );
}

export default App;
