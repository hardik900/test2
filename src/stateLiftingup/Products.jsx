import React from 'react'
import {data} from "./data"

function Products({senddata}) {
  console.log("senddata => ",senddata)
 

  let filterData = data.filter((val)=>{
    // return val.fname.toLowerCase() == senddata.toLowerCase()
    return val.fname.toLowerCase().includes(senddata.toLowerCase())
    // return val.fname.toLowerCase().includes(Ja)
  })
  console.log("filterData => ",filterData)


  let box = {
    height: "200px",
    width: "200px",
    backgroundColor: "green",
    margin :"10px",
    position: "relative"
  }

  return (
    <div className='flex flex-wrap justify-center'>{senddata}
      {
        filterData.map((val)=>{
          return (
            <div style={box}>
              <h1>{val.fname}</h1>
              <p>{val.course}</p>
              <p>{val.fees}</p>
              {
                val.course == "FSDJ" ? <span className='absolute bottom-0 right-1 bg-amber-300 p-1'>10%off</span> : ""
              }
            </div>
          )
        })
      }
    
    </div>
  )
}

export default Products