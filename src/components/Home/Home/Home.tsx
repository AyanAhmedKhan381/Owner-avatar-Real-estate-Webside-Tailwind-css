


import React from 'react'
import Hero from '../Hero-Section/Hero'
import AppartmentType from '../AppartmentType-Section/AppartmentType'
import Properties from '../Discover-Properties-Section/Properties'
import CityProperties from '../CityProperties-Section/CityProperties'
import Building_Feature from '../BuildingFeature-Section/Building_Feature'
import Review from '../Review_Section/Review'
import Blog from '../Blog_Section/Blog'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <AppartmentType/>
      <Properties/>
      <CityProperties/>
      <Building_Feature/>
      <Review/>
      <Blog/>
    </div>
  )
}

export default HomePage
