import React from 'react'

export default function  Alert(props) {
    const Capitalize = (word) =>{
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
<div style={{height:'50px'}}>
     { props.alertSuc &&  <div className={`alert alert-${props.alertSuc.types} alert-dismissible fade show`} role="alert">
    <strong>{Capitalize(props.alertSuc.types)}</strong>: {props.alertSuc.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>}
  </div>
  )
}

    //props.alertSuc iska mtbl agar ye null hai toh aage ka nhi chalega but jaise hi button pe click krne ke baad toggle hoga toh null se hatt ke kuch kaam krega tab ye && ke baad ke saare chize chalengi

