import { Link } from "react-router-dom"
import React from 'react'
import "./WatchCard.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function WatchCard({ _id, brand, price, color, image, gender, review, description, LoadWatch }) {

  const deleteWatch = async (watchId)=>{
     
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/watch/${watchId}`)

    toast.success(response.data.message)

    LoadWatch()
  }

  return (
    <div className='shoes-container'>
      <img className='shoes-img' src={image} alt="shoes-img" />
      <h2 className='brand'>{brand}</h2>

      <div className='info-container'>
        <div className='p-c-container'>
          <p className='price'>Price: {price}</p>
          <p className='color'>Color: {color}</p>
        </div>

        <div className='p-c-container'>
          <p className='price'>Gender: {gender}</p>
          <p className='color'>Review: {review}</p>
        </div>
      </div>

      <p>{description}</p>

      <div className='btn-container'>

        <Link to={`/edit/${_id}`}>
        <button className='btn'>Edit</button>
        </Link>


        <button className='btn' onClick={()=>{deleteWatch(_id)}}>Delete</button>
      </div>
     <Toaster/>
    </div>
  )
}

export default WatchCard