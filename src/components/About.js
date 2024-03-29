import React from 'react'

export default function About(prop) {
    // const [myStyle, setStyle] = useState ({
    //     color: '#212529',
    //     backgroundColor:'white'
        
    // })
    // const [textBtn, setdarkBtn] = useState("Enable Dark Mode")



//  let toggleClick = () =>{
// if(myStyle.backgroundColor === 'white'){
//     setStyle({
//         color: 'white',
//         backgroundColor:'#212529',
//         border:'1px solid white'
//     })
//     setdarkBtn("Enable Light Mode")
// }else{
//    setStyle({
//     color: '#212529',
//         backgroundColor:'white'  
//     })
//     setdarkBtn("Enable Dark Mode")
// }
// }

let myStyle = {
  color: prop.mode === "dark"?"white":"rgb(12 75 124)",
  backgroundColor :  prop.mode === "dark"?"rgb(12 75 124)":"white",
  border:'2px solid white',
  // borderColor: prop.mode === "dark"?"white":"#042743",
}
  return (
    <>
    <h1 style={{color: prop.mode === "dark"?"white":"rgb(12 75 124)"}}>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

{/* <button type='button' onClick={toggleClick} className='btn btn-dark my-4' >{textBtn}</button> */}
    
    </>
  )
}
