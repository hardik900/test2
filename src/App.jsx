import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GrandParent from './PropDrilling/GrandParent'
import Products from './stateLiftingup/Products'
import Navbar from './stateLiftingup/Navbar'
import State from './Hooks/State'
import Form from './Hooks/Form'
import Nav from './CondtionalRendering/Nav'
import StateRev from './Hooks/StateRev'

function App() {
  // let data = ["Prathmesh", "Yagya", "Yash", "chirag", "Tushar"]
  // console.log("useState => ",useState())
  let [data1, setData1] = useState("")

  let returnValue = function getData(data){
    // console.log("getData is call")
    console.log(data,"inside App")
    setData1((prev) => {
      console.log("prev=>", prev)
    })
    setData1(data)
    
  }

  console.log("return Value =>",returnValue)
  return (
    <>
      <StateRev />
      {/* <Nav /> */}
      <Navbar getData={returnValue} />
      <Products senddata={data1}  />
      {/* <State /> */}
      {/* <Form /> */}
      {/* <GrandParent sendData={data}  /> */}
    </>
  )
}

export default App
