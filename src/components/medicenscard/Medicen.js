import React from 'react'
import "./Medicen.css"
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'

function Medicen({id,name,description   }) 

{
  const navigate=useNavigate();
 const deleteMedicen =async(id)=>{
 const response =await axios.delete(`https://medical-backend-5a69.onrender.com/${id}`)
 window.location.reload();
 }

  return (
    <div onClick={(e)=>{
navigate(`/detail/${id}`)
    }}>

    <div className='Medicen-card'>
    
    <span className='medicen-id'>{id}</span>
    <span className='medicen-name'> {name}</span>
   <div>
    <span className='medicen-description'> description:{description}</span>
    </div>
    <button type='btn' className='Delete-btn' onClick={(e)=>{
      deleteMedicen(id)
e.stopPropagation();
console.log(`Delete ${name}`)
    }}>Delete </button>

<button type='btn' className='Edit-btn' onClick={(e)=>{
     navigate(`/update/${id}`)
e.stopPropagation();

    }}>Edit </button>
    </div>
    
    </div>
  )
}

export default Medicen