import React from 'react';
import { useState } from 'react';
import cl from '@/styles/ProductCard.module.css'

const ProductCard = (props) => {
  const { product, editCard, setEditableProduct } = props

  function handleEdit() {
    setEditableProduct(product);
    editCard(true);
  }
  
  return (
    <div>
      <div className={cl.product}>
        <div className={cl.image_block}>
          <img 
            className={cl.image} 
            onClick={handleEdit}
            src={product.imageUrl} 
            alt="product-photo" 
          />
        </div>
        <p>{product.name}</p>
        <p>count: {product.count}</p>
        <p>size: {product.size?.width} x {product.size?.height} </p>
        <p>weight: {product.weight}</p>
        <p>about: {product.comments.join(' ').truncate(40)}</p>
      </div>
      
    </div>
  );
}

export default ProductCard;
