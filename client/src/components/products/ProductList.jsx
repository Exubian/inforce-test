import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import NewProduct from './NewProduct';
import MyModal from '@/components/input/MyModal';
import cl from '@/styles/ProductList.module.css'
import mixin from '@/mixin';
import EditProductForm from './EditProductForm';

const ProductList = () => {

  const { products } = useSelector((state) => state);

  // для конструктора
  const [state, setState] = useState({
    isForm: false,
    isEditCard: false
  });
  const setIsForm = (value) => {
    setState(prevState => ({
      ...prevState,
      isForm: value
    }));
  }
  const setIsEditCard = (value) => {
    setState(prevState => ({
      ...prevState,
      isEditCard: value
    }));
  }
  const [editableProduct, setEditableProduct] = useState(null)

  async function addProduct(data) {
    await mixin.fetch('/products', "POST", data)
    close('isForm')
  }

  async function updateProduct(data, product) {
    await mixin.fetch(`/products/${product.id}`, "PATCH", data)
    close('isEditCard')
  }

  // конструктор закрытия
  function close(variable) {
    setState(prevState => ({
      ...prevState,
      [variable]: false
    }))
  }

  return (
    <section className={`flex-column ${cl['product-list']}`}>
      <div className="flex">
        <div className={cl['product-list']} >
          {products?.map( (product, i) => 
            <ProductCard 
              product={product} 
              editCard={setIsEditCard}
              setEditableProduct={setEditableProduct}
              key={product.id} 
            />
          )}
        </div>
        <button className={cl.add_button_top} onClick={() => setIsForm(true)}>
          +
        </button>
      </div>
      <button className={cl.add_button} onClick={() => setIsForm(true)}>
        +
      </button>

      {state.isForm ?
        <MyModal close={close} variable={'isForm'} >
          <NewProduct addProduct={addProduct} />
        </MyModal>
        : 
        false
      }

      {state.isEditCard ?
        <MyModal close={close} variable={'isEditCard'} >
          <EditProductForm 
            product={editableProduct} 
            update={updateProduct} 
          />
        </MyModal>
        :
        false
      }
    </section>
  );
}

export default ProductList;
