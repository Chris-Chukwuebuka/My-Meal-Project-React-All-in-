import React from 'react'
import { useGlobalcontext } from '../hooks/Context'
import SearchForm from '../Components/SearchForm'
import MealList from '../MealList'
import Banner from '../Components/Banners'
const Homepage = () => {
  return (
    <div>
      <Banner/>
      <SearchForm /> 
      <MealList/>


    </div>
  )
}

export default Homepage