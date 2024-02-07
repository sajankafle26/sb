import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListProduct() {
    let [cat, setCat]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories').then((a)=>a.json()).then((b)=>setCat(b))
    },[])
  return (
    < >
      
<ul className="w-96">
    {cat.map((a)=>(
 <li className="w-full border-b-2 border-neutral-100 uppercase border-opacity-100 py-4 dark:border-opacity-50 flex gap-5 items-center" key={a}>
 <img src='https://demo.shopkitwp.com/hello-shopkits/wp-content/uploads/sites/2/2023/04/icon1-1.png'/>  
 <Link to={`/cat/${a}`}>{a} </Link><i className="fa fa-angle-right" aria-hidden="true"></i>

</li>
    ))}
 
   
</ul>

    </ >
  )
}

export default ListProduct
