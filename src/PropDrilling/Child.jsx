import React from 'react'

function Child({data}) {
    console.log(data,"data inside child")
  return (
    <div>Child {data[0]}</div>
  )
}

export default Child