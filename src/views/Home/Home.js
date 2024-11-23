import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./Home.css"
import Medicen from "../../components/medicenscard/Medicen"
import addMedicen from "./../../assets/add-image.png"
import { Link } from 'react-router-dom'

function App() {
  const [medicens,setMedicens] = useState([])

  const loadStudents = async()=>{
    console.log('loading medices')
    const response = await axios.get('http://localhost:5001/medicens');

      setMedicens(response.data.data);
    
    console.log(response)

  }

  useEffect(()=>{
    loadStudents()
  },[])

  return (
    <div>
      <h1 className='app-heading'> Medical App</h1>
      <div className='medicencard-home'>
      {
        medicens.map((medicen,index)=>{
          const { id,name,description} =medicen;
          return (<Medicen 
          key={id ||index} 
           id={id}
           name={name} 
           description={description}
           />)
           
        })

        }
        </div>
      {
        medicens.length===0&&<h1 style={{textAlign:'center'}}> NO medicen found</h1>
      }

     <Link to={"/add"}>  <img src={addMedicen} className='icon-add-image'/></Link>
    </div>
  )
}

export default App