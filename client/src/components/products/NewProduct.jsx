import React from "react";
import { useRef } from "react";
// import cl from "@/styles/NewProduct.module.css";

const CartForm = ({ addProduct }) => {
  const form = useRef();

  function formHandler(e) {
    e.preventDefault();
    const data = new FormData(form.current).toObject();
    for (let field in data) {
      if (field == 'comments') data[field] = [data[field]]
      
      if (typeof data[field] == 'string') {
        data[field] = data[field].trim();
      }
    }
    addProduct(data);
  }

  return (
    <form className='form' ref={form} onSubmit={formHandler}>
      <div>
        <label htmlFor='image_input'>image url</label>
        <input
          type='text'
          id='image_input'
          name='imageUrl'
          placeholder='image url...'
          defaultValue=''
        />
      </div>
      <div>
        <label htmlFor='name_input'>product name</label>
        <input
          type='text'
          id='name_input'
          name='name'
          placeholder='enter name...'
          defaultValue=''
        />
      </div>
      <div>
        <label htmlFor='count_input'>product count</label>
        <input
          type='number'
          id='count_input'
          name='count'
          placeholder='enter count...'
          defaultValue={10}
        />
      </div>
      <div>
        <div>
          <label htmlFor='width_input'>product width</label>
          <input
            type='number'
            id='width_input'
            name='size.width'
            placeholder='enter width...'
            defaultValue={100}
          />
        </div>
        <div>
          <label htmlFor='height_input'>product height</label>
          <input
            type='number'
            id='height_input'
            name='size.height'
            placeholder='enter height...'
            defaultValue={100}
          />
        </div>
      </div>
      <div>
        <label htmlFor='weight_input'>product weight</label>
        <input
          type='text'
          id='weight_input'
          name='weight'
          placeholder='enter weight...'
          defaultValue='100 g'
        />
      </div>
      <div>
        <label htmlFor='comment_input'>comment to product</label>
        <input
          type='text'
          id='comment_input'
          name='comments'
          placeholder='enter comment...'
          defaultValue=''
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default CartForm;
