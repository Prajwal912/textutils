import React from 'react'



function Alert(props) {
    const capitalWord = (text)=>{
      return  text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase().split(" ");
    }

  return (
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalWord(props.alert.type)}</strong> : {props.alert.msg}
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
  )
}

export default Alert
