import React from 'react'
import Parent from './Parent'

function GrandParent({sendData}) {
    console.log(sendData,"sendData inside Grand PArent")
  return (
    <div>
        <Parent sendData = {sendData}/>
        <h1>GrandParent</h1>
    </div>
  )
}

export default GrandParent