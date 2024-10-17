// import React from 'react'

const Productbage = ({badge}) => {

    if(badge === "choice"){
        return (
            <span className='text-xs xl:sm bg-slate-800 text-white p-1'>Amazon's <span className='text-orange-600'>Choice </span></span>
          )

    }
    else if (badge === "seller"){
        return (
            <span className='text-xs xl:sm bg-orange-500 text-white p-1'>
              #1 Best Seller
            </span>
          )


    }
    else if (badge === "limited"){
        
        return (
            <span className='text-xs xl:sm bg-red-600 text-white p-1'>
              Limited Time Deal
            </span>
          )
        
    }

  return (
    <div>
      
    </div>
  )
};

export default Productbage
