import React from 'react'
import { useGlobalcontext } from '../hooks/Context';
import { useRef } from 'react';
const SearchForm = () => {
    const { setSearchValue } = useGlobalcontext();
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const inputContainer = useRef();
    const searchMeal = () => {
        setSearchValue(inputContainer.current.value);
    }
  return (
      <div className='my-2'>
          <form onSubmit={handleSubmit} className='w-100 w-md-50 mx'>
              <label htmlFor="name" className='form-label text-primary fw-bold fs-4 text-center'>Search for your favourite Meal</label>
              <input type="text"className='form-control 'id='name'ref={inputContainer}  onChange={searchMeal}/>
          </form>
    </div>
  )
}

export default SearchForm