import React,{useEffect} from 'react'
import axios from 'axios'

function App() {

  const loadStudents = ()=>{
    console.log('loading medices')
  }

  useEffect(()=>{
    loadStudents()
  },[])

  return (
    <div>
      <h1> Medical App</h1>
    </div>
  )
}

export default App