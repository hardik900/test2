import React from 'react'
import Child from './Child'
function Parent({sendData}) {
    console.log(sendData,"sendData inside Parent")
  return (
    <div>
        <Child data={sendData}/>
        <h1>Parent</h1>
    </div>
  )
}

export default Parent