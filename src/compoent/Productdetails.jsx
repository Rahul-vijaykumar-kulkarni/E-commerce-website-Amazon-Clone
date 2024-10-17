// import React from 'react';
import Productbage from './Productbage'
import Productratings from './Productratings'

const Productdetails = ({ product, ratings }) => { // Correctly destructure props
  return (
    <div className='mb-1'>
      <div className='text-xs xl:text-2xl font-medium mb-1'>{product.title}</div>
      <div className='text-sm xl:text-base f mb-1'>by <span className='text-blue-500'>{product.brand}</span></div>
      {
        ratings &&
        <div className='text-sm xl:text-base  mb-1'><Productratings avgRating={product.avgRating} ratings={product.ratings}/></div>
      }
      
      <div className='text-xs xl:text-sm font-bold mb-1' >{product.attribute}</div>
      <div > <Productbage badge={product.badge}/></div>
    </div>
  );
};

export default Productdetails;
