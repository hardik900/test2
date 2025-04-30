import React, { useState } from 'react'

function State() {
    let [count, setCount] = useState(0)
    let style = {
        padding : "10px 20px",
        border: "1px solid black"
    }
    let count1 = 0

    function inc(){
        setCount(count+1)
        // count = count+1
        console.log(count)
        // console.log(count)
    }
    function dec(){
        // count = count-1
        // console.log(count)
        setCount(count-1)
    }
  return (
    <div>
        <button style={style} onClick={inc}>inc</button>
        <span>{count}</span>
        <button style={style} onClick={dec}>dec</button>
    </div>
  )
}

export default State