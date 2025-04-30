import React, { useState } from 'react'

function StateRev() {
    const [count1, setCount1] = useState(0)

    // let count = 0
    function inc(){
        setCount1(count1+1)
        // old method 
        // count = count+1
        // console.log("inc =>", count)
    }
    console.log(count1)
    function dec(){
        setCount1(count1-1)
        // count = count-1
        // console.log("dec =>", count)
        
    }
  return (
    <div>
        <button onClick={inc}>inc</button>
        {count1}
        <button onClick={dec}>dec</button>
    </div>
  )
}

export default StateRev