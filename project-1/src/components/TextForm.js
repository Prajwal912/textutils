import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to lowercase", "success");
    }

   
    const ClearLoClick =() => {
 let newText = " ";
        setText(newText)
       
    }

    const CapitalWordonClick =() => {
        let newText = text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase().split(" ");
        setText(newText);
    }

    const ReverseonClick =() => {
        let newText = text.split("").reverse().join("");
        setText(newText);
    }

    const handleCopy =() => {
       let text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
    }

    const handleSpace =() => {
        //regex 
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
     }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

   

    const handleOnChange = (e)=>{
        setText(e.target.value);
    }
    //state here the setText is an function and text is an variable
    const [text, setText] = useState('');

    //if we have to change the text then use
    //setText("Enter Text Here2")
  return (
      <>
<div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>

<h1>{props.heading} </h1>

<div className="mb-3">
<textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>

<button disabled={text.length===0} className='btn btn-dark' onClick={handleUpClick}>Convert To Uppercase</button>
<button disabled={text.length===0} className='btn btn-dark my-1 mx-1' onClick={handleLoClick}>Convert To Lowercase</button>
<button disabled={text.length===0} className='btn btn-dark my-1 mx-1' onClick={ClearLoClick}>Clear</button>
<button disabled={text.length===0} className='btn btn-dark my-1 mx-1' onClick={CapitalWordonClick}>Title Case</button>
<button disabled={text.length===0} className='btn btn-dark my-1 mx-1' onClick={ReverseonClick}>reverse</button>
<button disabled={text.length===0}  className='btn btn-dark my-1 mx-1' onClick={handleCopy}>handleCopy</button>
<button disabled={text.length===0}  className='btn btn-dark my-1 mx-1' onClick={handleSpace}>handleSpace</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-1 my-1">Speak</button>
</div>


<div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
<h2 className='mb-3'>Your Text Summary</h2>
<p>{text.split(" ").filter((ele) => {return ele.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter((ele) => {return ele.length!==0}).length} Minutes read</p>

<h2>Preview</h2>
<p>{text.length > 0 ? text : `Nothing to preview` }</p>
</div>


</>

  )
}
