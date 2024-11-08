import React, { useState } from 'react'
import {   Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
const Register = () => {
    const [isAuthorised,setISAuthorised]=useState(false)
        const {registerUser,signInWithGoogle}=useAuth()
        console.log(registerUser);
        
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [message,setMessage]=useState(" ")

    // register user
    const onSubmit = async(data )=> {
      console.log(data);
      try{
await registerUser(data.email,data.password)
alert("User registered SuccesFully")
      }catch(err){
    setMessage("please provide a valid email and password")
    console.log(err);
    
      }
    }

    const handleGoogleSignIn=async()=>{
      try{
        await signInWithGoogle()
        alert("login Succesfull!")
        navigate('/')
                }catch(error){
        alert("google Sign Failed")
        console.log(error);
        
                }
    }
  return (
    <>
      <div className='h-[calc(100vh-120px) flex justify-center items-center mt-5'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Register</h2>
            < >
                
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                        <input
                        {...register("email", { required: true })}
                        type="email" placeholder='Email Address'className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
                    </div>
    
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                        <input
                        {...register("password", { required: true })}
                        type="password"  placeholder='password'className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
                    </div>
                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }
                    <div>
                        <button onClick={handleSubmit(onSubmit)} style={{width:'220px'}} className='ms-12 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 focus-outline-none   '>Register</button>
                    </div>
                
            </>
            <p className='align-baseline font-medium mt-4 text-sm'>Haven't any Account ? Please <Link to={'/login'} className='text-blue-500 hover:text-blue-700 '>Login</Link></p>

            <div className='mt-4'>
                <button onClick={handleGoogleSignIn} className='w-full flex-wrap gap-1 items-center justify-center bg-indigo-950 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none'>
                <i class="fa-brands fa-google"></i><span> Sign With Google</span></button>
            </div>
        <p className='mt-5 text-center text-gray-500 text-xs'><i class="fa-regular fa-copyright"></i><span>2025 Book Store .All Rights Reserved</span></p>
        </div>
      </div>
    </> 
  )
}

export default Register
