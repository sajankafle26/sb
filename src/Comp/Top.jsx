import React from 'react'

function Top() {
  return (
    < >
      <section className=' bg-black text-lime-50 py-3 uppercase text-sm font-bold'>
            <div className="container mx-auto flex justify-between">
                    <ul className='flex gap-3'>
                        <li>    My account</li>
                        <li>  Checkout</li>
                        <li>  Faq</li>
                        <li>  Support</li>

                    </ul>

                    <ul className='flex gap-3'>
                        <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    </ul>
            </div>
      </section>
    </ >
  )
}

export default Top
