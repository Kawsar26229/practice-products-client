import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = ({ product, prodId }) => {
  const handleDeleteProduct = (product) => {
    const agree = window.confirm('Are you sure you want to delete?');
    if (agree) {
      fetch(`http://localhost:8000/products/${product._id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          prodId(product._id);
          if (data.deletedCount > 0) {
            alert('Products deleted successfully.');
          }
        });
    }
  };

  const { _id, title, description, thumbnail, price, stock } = product;
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img
          src={thumbnail}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
        <div className='card-actions justify-between mt-4'>
          <div>
            <button
              onClick={() => handleDeleteProduct(product)}
              className='btn btn-primary mr-4'>
              <FaTrash></FaTrash>
            </button>
            <Link
              to={`/editProduct/${_id}`}
              className='btn btn-primary'>
              <FaEdit></FaEdit>
            </Link>
          </div>
          <button className='btn btn-primary'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
