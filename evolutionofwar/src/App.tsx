import './App.css';
import { API } from 'aws-amplify'
import { useEffect, useState } from 'react'

const myAPI = "evolutionapi"
const path = '/maps'; 

const App = () => {
  const [mapsKey, setMapsKey] = useState('');

  //Pretending to get mapsAPIKey
  useEffect(() => {
  //@ts-ignore
    API.get(myAPI, path + "/" + 1)
    .then(response => {
      console.log(response)
      setMapsKey(response);
    })
    .catch(error => {
      console.log(error)
    })
  }, []);


  return (
    
    <div className="App">
      
    </div>
  )
}

export default App;