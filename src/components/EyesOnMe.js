import React from 'react'
function Blur() {
    console.log("Hey! Eyes on me!");
    
}
function Focus() {
  console.log("Good!");
    
}

const EyesOnMe = () => {
  return (
    <div>
    <button onFocus={Focus} onBlur={Blur}> Eyes on me</button>
    </div>
  )
}

export default EyesOnMe