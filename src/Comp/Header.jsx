import React, { useState } from 'react'
import logo from "../assets/logo-1.png"
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import Details from '../Pages/Details'
import Cart from '../Pages/Cart'
function Header() {
  let [q, setQ]=useState(true)
  var ww=()=>{
    setQ(!q)
  }
  return (
    < >
      <div className="container mx-auto py-3 flex gap-10 justify-between items-center">
        <div>
            <img src={logo}/>
        </div>
        <form>
            <input type='text' className='border p-2 w-[340px]' placeholder='Search Product...'/>
            <select className=' bg-slate-200 p-3'>
                <option>All Category</option>
            </select>
            <button><i className="fa fa-search bg-slate-200 p-3 rounded-md" aria-hidden="true"></i>
</button>
        </form>

        <div>
       <p>CALL US NOW</p> 
<p className='text-md font-bold'>+5965-525-889</p>
        </div>

        <div>
          <Link to="/cart">
        <i className="fa fa-cart-arrow-down text-3xl" aria-hidden="true"></i> 0.00
        </Link>
        </div>
      </div>

      <nav className='border'>
        <div className="container mx-auto flex justify-between  gap-12 items-center">
                <div className='bg-black text-lime-50 p-3 relative' onMouseOver={ww}> <i class="fa fa-bars" aria-hidden="true"></i>
  CATEGORIES 
  
  <div className={`w-[160px] h-[150px]  bg-red-500 absolute start-0  ${q? ' hidden': ''}`}></div>
  
  </div>
                <nav>
                    <ul className='flex gap-5 uppercase font-bold'>
                        <li><Link to="/">    Home </Link></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                <div className='bg-black text-lime-50 p-3'>
                SHOP NOW 
                </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cat/:categoryId/' element={<Categories/>}/>
        <Route path='/detail/:id/' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </ >
  )
}

export default Header
