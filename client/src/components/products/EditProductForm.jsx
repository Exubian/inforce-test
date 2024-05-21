import React from 'react';
import { useRef } from 'react';
// import cl from "@/styles/NewProduct.module.css"

const EditProductForm = (props) => {
  const { product, update } = props

  const form = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    const data = (new FormData(form.current)).toObject()
    for (let field in data) {
      if (typeof data[field] == 'string') {
        data[field] = data[field].trim();
      }
    }
    // console.log(data);
    update(data, product);
  };


  return (
    <form 
      className='flex-column form'
      onSubmit={handleSubmit} 
      ref={form}
    >
      <label>
        Image URL:
        <input
          type='text'
          name='imageUrl'
          defaultValue={product.imageUrl}
        />
      </label>
      <label>
        Name:
        <input 
          type='text' 
          name='name' 
          defaultValue={product.name}
        />
      </label>
      <label>
        Count:
        <input
          type='number'
          name='count'
          defaultValue={product.count}
        />
      </label>
      <div>
        <label>
          Width:
          <input
            type='number'
            name='size.width'
            defaultValue={product.size.width}
          />
        </label>
        <label>
          Height:
          <input
            type='number'
            name='size.height'
            defaultValue={product.size.width}
          />
        </label>
      </div>
      <label>
        Weight:
        <input
          type='text'
          name='weight'
          defaultValue={product.weight}
        />
      </label>
      <label>
        Comment:
        <input 
          type="text" 
          name='comment'
          defaultValue={product.comments}
        />
      </label>
      <button type='submit'>Update Product</button>
    </form>
  );
}

export default EditProductForm;
