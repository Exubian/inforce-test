import React from 'react';
import { useState } from 'react';
import CartForm from './CartForm';
import cl from '@/styles/ProductCard.css'

const ProductCard = (product) => {
  const [isForm, setIsForm] = useState(false)
  
  return (
    <div>
      <div className={cl.product} key={i}>
        <div className={cl.image} onClick={setIsForm(!isForm)}></div>
        <p>{product.name}</p>
        <p>count: {product.count}</p>
        <p>size: {product.size.width} x {product.size.height}</p>
        <p>weight: {product.weight}</p>
      </div>
      {isForm ? <CartForm></CartForm> : false}
    </div>
  );
}

export default ProductCard;
