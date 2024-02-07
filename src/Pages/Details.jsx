import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

function Details() {
    let {id}=useParams()
    let [data, setData]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`).then((a)=>a.json()).then((b)=>setData(b))
    },[])
  return (
    <div className='container mx-auto py-4'>
        <h1 className='  text-3xl font-bold py-3'>{data.title}</h1>
        <img src={data.thumbnail}/>
        <p>{data.description}</p>

        <button className=' bg-black text-lime-50 p-3'>Add To cart</button>
    </div>
  )
}

export default Details
