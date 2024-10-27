import React from 'react'
import banner from '../assets/banner.png'
const Banner = () => {
  return (
    <>
      
      <div className='border-2 rounded-md
       flex flex-col md:flex-row py-10 justify-between items-center mx-12 mt-5 shadow-md'>
          <div className='md:w1/2 w-full px-10'>
<h1 className='md:text-5xl text-2xl font-medium mb-5'>New Releases This Week</h1>
<p className='mb-10'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam <br />in quisquam repudiandae dolores beatae accusamus, assumenda dignissimos eveniet. <br /> Amet ducimus, ullam quia quos sequi beatae <br />quis at perspiciatis dolore ea.
</p>
<button style={{width:"150px"}} className='btn bg-yellow-300 rounded p-2 font-bold ms-5'>Subcribe</button>
                 </div>
                    
                 
                 <div className='md:w1/2 w-full flex items-center md:justify-end'>
                    <img src={banner}alt="" />
                 </div>
          
      </div>
    </>
  )
}

export default Banner
