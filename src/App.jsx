import { useEffect, useState } from 'react'
import './App.css'
import { getRamdonDimensions } from './util/random'
import axios from 'axios'
import Location from './components/Location'
import ResiendetList from './components/ResiendetList'

function App() {

    const [location, setLocation] = useState(null)

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRamdonDimensions()}`

    axios.get(URL)
      .then(({data}) => setLocation(data))
      .catch((err) => console.log(err))
    
  }, [])
  

  return (
    <main className='bg-cover bg-center  bg-[url("/img/bg.png")] min-h-screen text-white' >
      <div className='flex justify-center h-[20rem] p-10 '><img className='' src="img/Twist.png" alt="" />
      <div className='absolute top-10 p-10'><img src="img/nombre_1.png" alt="" /></div></div>
      
        <Location location={location} setLocation={setLocation}/>
        <ResiendetList location={location}  residents={location?.residents}/>
        
    </main>
  )
}

export default App
