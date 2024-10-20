// import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline'

const Productratings = (props) => {
const starnum = props.avgRating;
const ratingnumber = props.ratings;



  return (
    <div className='flex'>
        {Array.from ({length:starnum}, (_,i)=> <StarIcon key={i} className='stroke-[#F1B61F] fill-[#F1B61F] h-[20px]'/>)}
       
        {Array.from ({length:5 - starnum}, (_,i)=> <StarIcon key={i} className='stroke-[#F1B61F] h-[20px]'/>)}
        <span className='ml-3 text-blue-500'>ratings</span>
    </div>
  )
}

export default Productratings
