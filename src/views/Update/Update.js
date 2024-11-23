import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Update.css"
import Homeimg from "./../../assets/home-image.png"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast,{Toaster} from "react-hot-toast";

function Add() {
  //const [id ,setId] = useState('');
  //const [name,setName] = useState('');
  //const [description,setDescription] = useState('');
const {id} = useParams();
const [ medicen,setMedicen] = useState({
  id:"",
  name:"",
  description:""
})

const updateMedicen = async(id)=>{
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/medicens/${id}`)

  setMedicen(response.data.data);
}

useEffect (()=>{
  updateMedicen(id)

},[id])

const addMedicen =async()=>{
  try{
  const response = await axios.put(`${process.env.REACT_APP_API_URL}/medicens/${id}`,{id:medicen.id,name:medicen.name,description:medicen.description})
 toast.success(response?.data?.message);
  

 

}
 catch(error)
 {
  toast.error(error?.response?.data?.message)
}
}

  return (
    <div>
        <h1 className='add-page-heading'> Update medicen</h1>
        
        <div className='medicen-form'>
            <input type='text' placeholder='id' className='user-input' value={medicen.id} 
             onChange={(e)=> setMedicen(
             {
              ...medicen, 
              id : e.target.value
             } 
              )}
              disabled/>
            <input type='text' placeholder='name' className='user-input' value={medicen.name}  
             onChange={(e)=> setMedicen(
             {
              ...medicen,
              name: e.target.value
             } 
              )}/>
            <input type='text' placeholder='description' className='user-input' value={medicen.description}  
             onChange={(e)=> setMedicen(
              {
                ...medicen,
              description:e.target.value
              }
             )
            }/>
        </div>
        <button type='button' className='medicen-add-btn' onClick={()=>{
          addMedicen()
        }}> Update Medicen</button>
  <Link to={"/"}>
  <img src={Homeimg} className='Home-img-addpage'/>
  </Link>
  <Toaster/>
    </div>
  )
}

export default Add