import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "evolutionapi"
const path = '/entries'; 

const App = () => {
  const [input, setInput] = useState("")
  const [customers, setCustomers] = useState([])

  //Function to fetch from our backend and update customers array
  function getCustomer(e: any) {
    let entryId = e.input
    //@ts-ignore
    API.get(myAPI, path + "/" + entryId)
       .then(response => {
         console.log(response)
         let newCustomers = [...customers]
        //@ts-ignore
         newCustomers.push(response)
         setCustomers(newCustomers)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <h1>Super Simple React App</h1>
      <div>
          <input placeholder="customer id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
      </div>
      <br/>
      <button onClick={() => getCustomer({input})}>Get Customer From Backend</button>

      <h2 style={{visibility: customers.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
       customers.map((thisCustomer: any, index) => {
         return (
        <div key={thisCustomer.entryId}>
          <span><b>CustomerId:</b> {thisCustomer.entryId} - <b>CustomerName</b>: {thisCustomer.entryName}</span>
        </div>)
       })
      }
    </div>
  )
}

export default App;