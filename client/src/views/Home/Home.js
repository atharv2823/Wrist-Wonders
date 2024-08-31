import React, { useState, useEffect } from 'react'
import "./Home.css"
import WatchCard from '../../components/WatchCard/WatchCard.js'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
//import AddWatchPage from '../AddWatchPage/AddWAtchPage'


function Home() {

  const [watch, setWatch] = useState([])

  const LoadWatch = async ()=>{

    toast.loading("Watch Page Loading.......")

    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/watch`)

    toast.dismiss()

    toast.success("Watch Loded Successfully")

    setWatch(response.data.data)

  }

 useEffect(()=>{

  LoadWatch()

  }, [])
  


  return (
    <>
      <div>

        <h1 className='heading'>Wrist Wonders</h1>

        <div className='main-container'>
          {
            watch.map((watch, i) => {

              const {
                _id,
                brand,
                price,
                color,
                image,
                gender,
                review,
                description
              } = watch

              return(
                <WatchCard 
                key={i}
                _id={_id}
                brand={brand}
                price={price}
                color={color}
                image={image}
                gender={gender}
                review={review}
                description={description}
                LoadWatch={LoadWatch}
                />
              )
            })
          }
        </div>

        <Link to="/add">
        <img className='add-img' src="https://cdn-icons-png.flaticon.com/128/8191/8191584.png" alt="add-img" /></Link>

      </div>
      <Toaster/>
    </>
  )
}

export default Home