import React ,{useEffect,useState}from 'react'
import "./Detail.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Detail() {
    const {id} = useParams();
    const [medicen,setMedicen] = useState({})
    const loadMedicenDetails = async(id)=>{
     const response = await axios.get(`${process.env.REACT_APP_API_URL}/medicens/${id}`)
     setMedicen(response.data.data)
    }

    useEffect(()=>{
loadMedicenDetails(id)
    },[id])
  return (
    <div>
        <h1 className='detail-page'> Detail page</h1>
       <div className='detail-page-info'>
       <h2> id:{id}</h2>
        <h2> Name:{medicen.name}</h2>
        <h2> description:{medicen.description}</h2>
       </div>
       
    </div>
  )
}

export default Detail