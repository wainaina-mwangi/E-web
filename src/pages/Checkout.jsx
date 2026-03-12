import React from 'react'
import { useCart } from "../Context/cartContext";

function Checkout() {
  const {}=useCart();
  return (
    <div className='page'>
      <div className='container'>
     <h1 className='page-title'>checkout</h1>
     <div className='checkout-container'>
      <div className='checkout-items'>
        <h1>order summary</h1>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Checkout