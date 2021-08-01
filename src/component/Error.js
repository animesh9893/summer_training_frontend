import React from 'react';
import './common.css';
function Error(code=null) {
    return(
      <div>
        Error
      </div>
    )
}
export default Error;

export const ErrorComponent = ()=>{
  return(
    <div className="errorComponent">
      <button className="errorButton" onClick={()=>window.location.reload()}>Retry</button>
    </div>
  )
}