import React from 'react'

const Cart = ({product,deleteProduct}) => {
  return (
    <div className='flex flex-col p-2 border-2 rounded'>
      <div className='w-40'>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h1>{product.title.substring(0,20)}</h1>
        <h3>{product.price}</h3>
        <h2>{product.description.substring(0,20)}</h2>
        <button onClick={()=> deleteProduct(product.id)}  className="bg-red-500 text-white px-3 py-1 rounded mt-2" >Delete</button>
      </div>
    </div>
  )
}

export default Cart
