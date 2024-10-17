import { Link, useSearchParams } from 'react-router-dom'
import { useEffect , useState } from 'react'
import { callApi } from '../utils/CallApi'
import Productdetails  from "./Productdetails"
import {INDIAN_CURRENCY} from "../utils/constants"


const Searchresult = () => {
  const [searchParams] = useSearchParams();
  const [products , setproducts] = useState(null);


  const getSearchResult = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callApi(`data/search.json`)
      .then((searchResults) =>{
        const categoryResult = searchResults[category];
        if(searchTerm){
          const results = categoryResult.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
          setproducts(results);
        }
        else{
          setproducts(categoryResult);
        }

      });
  };

  useEffect(() => {
   
    getSearchResult();

  },[searchParams]);

  return (
    <div className='min-w-[1000px]  max-w-[1300px] m-auto pt-4'>
      { products && products.map((product , key) => {
        return (
          <Link key={key} to={`/Productpage/${product.id}`}>
               <div className='h-[250px] grid grid-cols-12   rounded mt-2 mb-1'>
              <div className='col-span-2 p-4  bg-gray-300'>
              <img className='m-auto' src={product.image_small} alt="" />
              </div>
              <div className='col-span-10 bg-gray-100 border border-gray-200 hover:bg-gray-200'>
              <div className='font-medium text-black p-2'>
                <Productdetails product={product} ratings={true}/>
                <div className='text-xl xl:text-2xl pt-1'>{INDIAN_CURRENCY.format(product.price)} </div>
              </div>
              </div>

          </div>
          </Link>
     
        )
        
      })

      }
      
    </div>
  )
}

export default Searchresult
