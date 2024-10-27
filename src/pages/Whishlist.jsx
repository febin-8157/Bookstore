import React from 'react'

const Whislist = () => {
 
  


  return (
    <>
      <div style={{marginTop:'80px'}} className='container mx-auto px-4'>
       
          <>
          <h1 className='text-red-500 text-3xl font-bold mb-5'>Your Wishlist</h1>
          
            <div className='grid grid-cols-4 gap-4 shadow'>
              <div  className='rounded border p-2 shadow'>
                <img style={{width:'100%'}} src="https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-71b40b91--Books_1200x.jpg?v=1620061288" alt="" />
                <div className='text-center'>
                  <h3 className='text-xl font-bold'></h3>
                  <div className='flex justify-evenly mt-3'>
                    <button className=''><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                    <button  className=''><i class="fa-solid fa-cart-plus text-lime-400"></i></button>
                  </div>
                </div>
              </div>
              </div>
        
            </>
            
            {/* <div style={{height:'100vh'}} className='flex flex-col items-center justify-center w-full'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSz1SYhpDvBfqDubCPfMflLOfO9rk87MNhw&s" alt="" />
            
            <h1 className='text-3xl font-bold text-blue-600'></h1></div> */}
            
          
          </div>

          
    </>
  )
}

export default Whislist
