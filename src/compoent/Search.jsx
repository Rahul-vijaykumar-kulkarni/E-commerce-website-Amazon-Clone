import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { callApi } from '../utils/CallApi';
import { useNavigate , createSearchParams } from 'react-router-dom'

const Search = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category , setcategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname:"Search" ,
      search:`${
        createSearchParams({
          category: `${category}`,
          searchTerm: `${searchTerm}` 
        })
      }`
    })
    setSearchTerm("");
    setcategory("All");
  };
  

  const getSuggestions = () => {
    callApi(`data/suggestions.json`)
      .then((suggestionResults) => {
        setSuggestions(suggestionResults);
      });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className='w-full relative'> {/* Add relative position to parent */}
      <div className='flex items-center h-10 bg-amazonclone-yellow'>
        <select  onChange={(e) => setcategory(e.target.value)}
        className='p-2 h-10 bg-gray-300 text-black border text-xs xl:text-sm'>
          <option value="">All</option>
          <option value="">Deals</option>
          <option value="">Amazon</option>
          <option value="">Fashion</option>
          <option value="">Computer</option>
          <option value="">Mobiles</option>
        </select>
        <input
          className='flex grow items-center h-[100%] rounded-l text-black'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit}
        className='h-[45px]'>
          <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
        </button>
      </div>
      {searchTerm && suggestions.length > 0 && (
        <div className='bg-white text-black w-full z-10 absolute '> {/* Ensure it's above other elements */}
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div key={suggestion.id} className='p-2 hover:bg-gray-200 ' onClick={() => setSearchTerm(suggestion.title)}> {/* Add hover effect */}
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
