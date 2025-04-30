import React from 'react'

function Navbar({getData}) {
    console.log(getData,"getData iside navbar")
  return (
    <div>
        <h1>Navbar</h1>
        <input type="text" onChange={(e)=>{getData(e.target.value)}} style={{border: '2px solid black'}} />
        {/* <input type="text" onChange={getData} style={{border: '2px solid black'}} /> */}
    </div>
  )
}

export default Navbar