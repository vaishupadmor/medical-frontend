import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./Home.css"
import Medicen from "../../components/medicenscard/Medicen"
import addMedicen from "./../../assets/add-image.png"
import { Link } from 'react-router-dom'

function App() {
  const [medicens,setMedicens] = useState([])

  const loadMedicens = async()=>
  {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/medicens`);
    console.log(response)
    setMedicens(response.data.data);
  }
  useEffect(()=>{
    loadMedicens()
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

     <Link to={"/add"}>  <img src={addMedicen} className='icon-add-image' alt='add-icon'/></Link>
    </div>
  )
}

export default App