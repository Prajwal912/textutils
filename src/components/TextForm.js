import React, { useState } from 'react'

export default function  TextForm(formProp)  {
    const handleUppEvent = () => {
        let newText = text.toUpperCase();
        UpdateText(newText)
        formProp.showAlert("your text is converted to UpperCase", "success")
    }
    const handleloEvent = () => {
        let newText = text.toLowerCase();
        UpdateText(newText)
        formProp.showAlert("your text is converted to LowerCase", "success")

    }
    const handleClearEvent = () => {
        let newText =  '';
        UpdateText(newText)
        formProp.showAlert("your text has been Cleared", "success")

    }
    const handleSpellEvent = () => {
        UpdatespkBool(!spkBool);
        if(spkBool){
            let msg =  new SpeechSynthesisUtterance();
            msg.text = text;
            (window.speechSynthesis.speak(msg))
        }else{
            (window.speechSynthesis.cancel())
        }
       
        formProp.showAlert("your words are", "success")

    }
    const handleCopyEvent = () => {
        let newText =  document.getElementById("myBox")
        newText.select()
       navigator.clipboard.writeText(newText.value);
       document.getSelection().removeAllRanges();
       formProp.showAlert("your text has been copied", "success")

    }

    const handleRemoveEvent = () => {
        let newText =  text.split(/[ ]+/).join("");
        UpdateText(newText)
        formProp.showAlert("your text spaces has been removed", "success")

    }
    const handleCapitalEvent = () => {
        let newText =  text.split("")[0].toUpperCase() + text.slice(1);
        UpdateText(newText)
        formProp.showAlert("your text has been capitalize", "success")
    }


    const handleOnchange = (event) => {
        UpdateText(event.target.value)
    }


   const [text, UpdateText] = useState("")
   const [spkBool, UpdatespkBool] = useState(true)
  return (
   <>

   <div className='container'>

<h3 className='mb-3'>{formProp.header}</h3>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: formProp.mode === "light" ? "white": "#042743", color: formProp.mode === "light" ? "black": "white"} } id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUppEvent}>Convert to Uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleloEvent}>Convert to toLowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearEvent}>Clear</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCapitalEvent}>Capital</button>
<button disabled={text.length===0} className='btn btn-warning mx-2 my-2' onClick={handleSpellEvent}>{spkBool ? "Speak" : "stop"}</button>
<button disabled={text.length===0} className='btn btn-success mx-2 my-2' onClick={handleCopyEvent}>Copy Your Text</button>
<button disabled={text.length===0} className='btn btn-danger mx-2 my-2' onClick={handleRemoveEvent}>Remove Your Spaces</button>
</div>

<div className='container my-5'>
<h1>Preview</h1>
<p>{text.length>0 ? text : "Nothing To Preview"}</p>
</div>

<div className='container my-5'>
<h1>Your Text Summary</h1>
<p>the Total words are :- {text.split(/\s+/).filter((ele) => { return ele.length !== 0}).length} and the Characters are :- {text.length} </p>
<p>Time Required to read the texts are :- {0.008 *  text.split(" ").filter((ele) => { return ele.length !== 0}).length}</p>
</div>




   </>
  )
}
