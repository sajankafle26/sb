import React, { useEffect, useReducer, useState } from 'react'
 var cartReducer=(state,action)=>{
    switch(action.type)
    {
        case 'add_to_cart': return { ...state, cart: [...state.cart, action.payload]}
       
    }
 }

function E() {
    let [state, dispatch]=useReducer(cartReducer, {cart:[]})
    let [cat, setCat]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((a)=>a.json()).then((b)=>setCat(b.products))
    },[])
    console.log(state.cart)
  return (
    <>
    <div>
    <h1 className='text-3xl'>Cart  List</h1>
        {state.cart.map((a)=>(
            <li>{a.title}    
            <button onClick={()=>dispatch({type:'remove_to_cart', payload: a})}> X</button>
            </li>
        ))}
        <hr/>
      <h1 className='text-3xl'>Product List</h1>
    <ul>
       {cat.map((a)=>(
        <li>{a.title}  <button onClick={()=>dispatch({type:'add_to_cart', payload: a})}>Add To Cart</button></li>
       ))}
    </ul>
    </div>
    </>
  )
}

export default E
