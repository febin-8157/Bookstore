import React from 'react'
import Banner from '../components/Banner'
import Recommend from '../components/Recommend'
import TopSelling from '../components/TopSelling'
import News from '../components/News'

const HomePage = () => {
  return (
    <>
   
   <Banner/>

   <div className='px-10 py-10'><TopSelling/></div>
     <div className='px-10 py-10'> <Recommend/></div>
   <div  className='px-10 py-10'> <News/></div>
   
    </>
  )
}

export default HomePage
