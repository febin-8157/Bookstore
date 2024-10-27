import { useEffect } from 'react'
import { Link,  } from 'react-router-dom'

const Cart = () => {
  useEffect
  return (
    <>
     
     <div style={{marginTop:'80px'}} className='container  mx-5'>
     
        <>
      <h1 className='font-bold text-3xl mb-5 text-red-600 ms-4'>Cart Summary</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className='coal-span-2 border rounded p-5 shadow'>
          <table className='table-auto w-full'>
            <thead>
              <tr>
                <td className='font-semibold'>#</td>
                <td className='font-semibold'>Name</td>
                <td className='font-semibold'>Image</td>
                <td className='font-semibold'>Quantity</td>
                <td className='font-semibold'>Price</td>
                <td className='font-semibold'>....</td>
                </tr></thead>
                <tbody>
                
                 <tr >
                  <td>1</td>
                  <td>Watch</td>
                  <td><img style={{width:'70px',height:'70px'}} src="https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-8a8430b5--Books5_1200x.jpg?v=1620061376"alt="" />
                  </td>
                  <td><div className='flex'>
                    <button  className='font-bold'>-</button>
                    <input style={{width:'40px'}} className='borderrounded p-1 me-2 ms-2' value="" type="text" readOnly/>
                    <button  className='font-bold'>+</button>
                  </div>
                  </td>
                  <td>$0</td>
                  <td><button ><i class="fa-solid fa-trash text-red-600"></i></button></td>
                </tr>
                 
                </tbody>
                </table>
    <div className='float-right mt-4'>
    <button className='bg-red-600 text-white rounded p-3 me-3 font-bold'>EMPTY CART</button>
    <Link to={'/'} className='bg-blue-600 text-white rounded p-3 me-3 font-bold'>SHOP MORE</Link>
    </div>

        </div>
        <div>
        <div style={{width:"600px"}} className='border rounded shadow p-5'>
       <h1 className='text-2xl font-bold '>Total Amount <span className='text-red-600'>$0 </span></h1>
  <hr />
  <button className='w-full bg-green-600 rounded p-5 text-white font-bold mt-5'>Checkout</button>
        </div>
      </div>
      </div>
     
      </>
      
      {/* <div style={{height:'100vh'}} className='flex flex-col items-center justify-center w-full'>
      <img style={{width:'500px'}} className='mb-5' src="https://d16py1fyt83ijv.cloudfront.net/vedobi/assets/img/empty-cart.webp" alt="" />
    
    <h1 className='text-3xl font-bold text-blue-600'></h1></div> */}
     
     
     </div>
    </>
  )
}

export default Cart
