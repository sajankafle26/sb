import React from 'react'
import ListProduct from '../Comp/ListProduct'
import Banner from '../Comp/Banner'
import ProductByCat from '../Comp/ProductByCat'

function Home() {
    
  return (
    < >
        <section className='py-5 container mx-auto md:flex'>
        <div className=' md:w-[30%] h-[330px] overflow-auto'>
            <ListProduct/>
        </div>
        <div className='md:w-[70%] bg-slate-200'>
            <Banner/>
        </div>
        </section>

       
       <ProductByCat aa="smartphones"/>
       <ProductByCat aa="laptops"/>
       <ProductByCat aa="skincare"/>
    </ >
  )
}

export default Home
