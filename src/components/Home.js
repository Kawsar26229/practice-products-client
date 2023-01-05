import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Products from './Products';

const Home = () => {
  const products = useLoaderData();
  const [displayProducts, setDisplayProducts] = useState(products);
  const prodId = (id) => {
    const remainingProduct = displayProducts.filter((prd) => prd._id !== id);
    setDisplayProducts(remainingProduct);
  };
  return (
    <div className='container mx-auto'>
      <h2 className='text-5xl font-bold text-center'>Products Shop</h2>
      <hr className='w-80 mt-4 mb-12 mx-auto' />
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {displayProducts.length <= 0 ? (
          <Link
            to='/addProduct'
            className='btn btn-primary'>
            Shop Now
          </Link>
        ) : (
          <>
            {displayProducts.map((product) => (
              <Products
                key={product._id}
                product={product}
                prodId={prodId}></Products>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
