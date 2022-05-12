// rfc
import React from 'react'

export default function About(props) {
    //state 1
    // const [myStyle, setMyStyle] = useState ({
    //     color: 'black',
    //     backgroundColor: 'white'  
    // })
    // //state 2
    // const [btntext, setbtntext] = useState ("Enable Dark Mode")

//   const  toggleStyle = ()  => {
//        if(myStyle.color === 'black') {
// setMyStyle({
//     color: 'white',
//     backgroundColor: 'black'
// })
// setbtntext("Enable Light Mode")
//        }else
//        {
//         setMyStyle({
//             color: 'black',
//             backgroundColor: 'white'  
//         })
//         setbtntext("Enable Dark Mode")
//        }
//     }

let myStyle ={
    color: props.mode === 'dark'? 'white': '#3f3d3d',
    backgroundColor: props.mode === 'dark'? '#3f3d3d': 'white',
    //     backgroundColor: 'black'
} 

  return (
<div className='container pb-3' style={{color: props.mode === 'dark'? 'white': '#3f3d3d',}}>
    <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
<div className="accordion-item">
<h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    Analize your text
    </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
    textUtils gives you a way to analyze your text Quickly and efficiently.
    </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Free to use
    </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
    textUtils is a free to use tool 
    </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Browser compatible
    </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
  this works in any Web bowsers 
    </div>
</div>
</div>
</div>

{/* <div className="container my-3">
<button onClick={toggleStyle} type="button"  className='btn btn-dark'>{btntext}</button>
</div> */}
</div>
  )
}
