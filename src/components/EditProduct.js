import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const EditProduct = () => {
  const storedProduct = useLoaderData();
  const [product, setProduct] = useState({});
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/products/${storedProduct._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleInputChange = (event) => {
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
            <h2 className='text-6xl font-semibold py-8'>Update A Product</h2>
            <form onSubmit={handleUpdateProduct}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Product Title</span>
                </label>
                <input
                  type='text'
                  name='title'
                  onChange={handleInputChange}
                  placeholder='Title'
                  defaultValue={storedProduct.title}
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
                  onChange={handleInputChange}
                  placeholder='Description'
                  defaultValue={storedProduct.description}
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
                  onChange={handleInputChange}
                  name='price'
                  defaultValue={storedProduct.price}
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
                  onChange={handleInputChange}
                  defaultValue={storedProduct.stock}
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
                  onChange={handleInputChange}
                  defaultValue={storedProduct.thumbnail}
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

export default EditProduct;
