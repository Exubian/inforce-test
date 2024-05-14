import React from 'react';
import productsStore from '@/store/products'
import ProductCard from './ProductCard';
import cl from '@/styles/ProductList.css'

const ProductList = () => {
  

  return (
    <div className={cl.product-list} >
      {productsStore.products.map( (product, i) => 
        <ProductCard product={product}></ProductCard>
      )}
    </div>
  );
}

export default ProductList;
