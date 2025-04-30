import React, { useState } from 'react'
 
function Form() {
    let [fname, setFname] = useState("")
    let [number, setNumber] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")

    function submitData(e){
        e.preventDefault()
        let data = {fname, number, email, pwd}
        console.log("data => ",data)
    }
  return (
    <div>
        <form action="">
            <input style={{border: '1px solid black'}} type="text" onChange={(e)=>{setFname(e.target.value)}} />
            <input style={{border: '1px solid black'}} type="number" onChange={(e)=>{setNumber(e.target.value)}} />
            <input style={{border: '1px solid black'}} type="email" onChange={(e)=>{setEmail(e.target.value)}} />
            <input style={{border: '1px solid black'}} type="password" onChange={(e)=>{setPwd(e.target.value)}} />
            <input type="submit" onClick={(e)=>{submitData(e)}} />
        </form>
    </div>
  )
}

export default Form