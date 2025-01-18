import React, { useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import {RiLockPasswordLine} from 'react-icons/ri'
import Login from './Components/Login/Login'
import TodoApp from './Components/TodoApp/TodoApp'

const App = () => {

const [fullname, setFullname] = useState('')
const handleFullnameChange = (e) => {
  setFullname(e.target.value)
}

const [isLogin, setIsLogin] = useState(false)
 

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(fullname);
  
  setFullname('')
  // setIsLogin(true)
}



return (
    <section className='bg-black h-screen sm:h-screen flex justify-center items-center sm:p-6 sm:min-h-[650px] min-h-[550px] '>
     
     
     <div>

<h1 className='text-3xl font-extrabold text-white md:text-2xl lg:3xl text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-700'>Future Planner </h1>
<p className='text-white font-mono'>Your future, planned to perfection.</p>

<form className='bg-gray-100 my-4 px-3 py-5 rounded'>

<div className='mb-4'>
<label htmlFor="fullname" className='block mb-1 text-sm font-medium text-gray-900'>Fullname</label>
<div className='flex'>
  <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md'>
    <RxAvatar className='w-4 h-4 text-gray-500 ' />
  </span>
  <input type="text" placeholder='fullname' required name="fullname" value={fullname} onChange={handleFullnameChange} id='fullname' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none rounded-e-lg focus:ring-blue-500 outline-none
   focus:border-blue-500 block flex-1 w-full min-w-0 p-2.5 placeholder-gray-400 ring-0 focus:0 ' />
</div>
</div>

<label htmlFor="fullname" className='block mb-1 text-sm font-medium text-gray-900'>Password</label>
<div className='flex'>
  <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md'>
    <RiLockPasswordLine className='w-4 h-4 text-gray-500 ' />
  </span>
  <input type="password" placeholder='password' name="password" required id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none rounded-e-lg focus:ring-blue-500 outline-none
   focus:border-blue-500 block flex-1 w-full min-w-0 p-2.5 placeholder-gray-400 ring-0 focus:0 ' />
</div>


<button className='w-full text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-0 outline-none focus:outline-none font-medium rounded-md py-2.5 mt-8' onClick={handleSubmit} >submit</button>

</form>
      </div> 

    </section>
  )
}

export default App
