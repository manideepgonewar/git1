import React ,{useState} from 'react'



export default function TextForm(props) {
  const [text , setText] = useState('');

  const handelUpClick = () =>{
  
    // setText('you hav clicked on set text');
   let newtext = text.toUpperCase();
    setText(newtext);
  } 

  const handelLOClick = () =>{
  
    // setText('you hav clicked on set text');
   let newtext = text.toLowerCase();
    setText(newtext);
  } 
  
  const handelonchange = (event) =>{
   
    setText(event.target.value);
  }
  return (
<>
<div className='container'>
  <h1>{props.heading} - {text}</h1>
<div className="form-group mb-3">
 
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handelonchange}  rows="8"></textarea>
  </div>

  <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert To uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handelLOClick}>Convert To lowecase</button>

<div className='conatiner my-3'>
  <h1>your text summary</h1>
  <p>{text.split(" ").length} characters </p>
  <p>{0.008 * text.split(" ").length}</p>
</div>
  </div>
 
</>
  )

}  
 