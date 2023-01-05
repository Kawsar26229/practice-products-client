import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const AddProducts = () => {
  const [product, setProduct] = useState({});
  const handleAddProduct = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast('Product Added Successfully');
          event.target.reset();
        }
      });
  };
  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
  };
  return (
    <div className='hero bg-base-200'>
      <div className='hero-content'>
        <div className='card shadow-2xl bg-base-100'>
          <div className='card-body'>
            <h2 className='text-6xl font-semibold py-8'>Upload A Product</h2>
            <form onSubmit={handleAddProduct}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Product Title</span>
                </label>
                <input
                  type='text'
                  name='title'
                  onChange={handleInputBlur}
                  placeholder='Title'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Product Description</span>
                </label>
                <input
                  type='text'
                  name='description'
                  onChange={handleInputBlur}
                  placeholder='Description'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Product Price</span>
                </label>
                <input
                  type='text'
                  placeholder='Price'
                  onChange={handleInputBlur}
                  name='price'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Product Stock</span>
                </label>
                <input
                  type='text'
                  name='stock'
                  onChange={handleInputBlur}
                  placeholder='Stock'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Product Thumbnail</span>
                </label>
                <input
                  type='text'
                  name='thumbnail'
                  onChange={handleInputBlur}
                  placeholder='Thumbnail'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Add a Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default AddProducts;
