import React ,{useState} from 'react'



export default function TextForm(props) {
  const [text , setText] = useState('');

  const handelUpClick = () =>{
  
    // setText('you hav clicked on set text');
   let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to Uppercase" ,"success");
  } 

  const handelLOClick = () =>{
  
    // setText('you hav clicked on set text');
   let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to Lowercase" ,"success");
  } 
  
  const handelonchange = (event) =>{
   
    setText(event.target.value);
  }

  const speak = () => {
   
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalert("Spoken SUCCESSFULLY" ,"success");
  }

  const removetext = () => {
    let newtext = "";
    setText(newtext);
    props.showalert("text REMOVED SUCCESSFULLY" ,"success");
  }
  return (
<>
<div className='container'>
  <h1 style={{Color : props.mode === 'dark' ? 'white' : 'black'}} >{props.heading}</h1>
<div className="form-group mb-3">
 
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handelonchange} style={{backgroundColor : props.mode === 'dark' ? 'gray' : 'white'}}   rows="8"></textarea>
  </div>

  <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert To uppercase new</button>
  <button className="btn btn-primary mx-1" onClick={handelLOClick}>Convert To lowecase</button>
  <button type="button" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <button type="button" onClick={removetext} className="btn btn-success mx-2 my-2">Remove Text</button>


<div className='conatiner my-3'>
  <h1>your text summary</h1>
  <p>{text.split(" ").length} characters </p>
  <p>{0.008 * text.split(" ").length}</p>
</div>
<div className='conatiner my-3'>
  <h1>Preveiw</h1>
  <p>{text.length > 0 ? text : "Please write the text to preview"}</p>


</div>
  </div>
 
</>
  )

}  
 