import React, { useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import {RiLockPasswordLine} from 'react-icons/ri'
import { MdOutlineSubtitles } from "react-icons/md";
import TodoLists from '../TodoLists/TodoLists';

const TodoForm = ({title, description, handleSubmit, handleTitleChange, handleDescriptionOnChange}) => {
   


  return (
    <section className='fixed w-full h-full top-0 left-0 flex justify-center bg-black '>
      
{/* overlay */}
<div className='absolute w-full h-full flex justify-center items-center'>

    <div className=' w-11/12 md:max-w-md mx-auto rounded shadow-lg z-20 overflow-y-auto' >


<form className='bg-gray-100 my-4 px-5 py-5 rounded' onSubmit={handleSubmit}>
    
<div className="mb-4">
    <label htmlFor="title" className='text-gray-900 font-medium text-sm block mb-1'>Title</label>
    <div className='flex'>
<span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md' >
<MdOutlineSubtitles />
</span>
<input type="text" value={title} onChange={handleTitleChange} name="title" id="title" className='bg-gray-50 border border-gray-300 rounded-e-lg focus:ring-blue-500 outline-none w-full min-w-0 p-2.5 focus:border-blue-500 ring-0 focus:0 placeholder-gray-400 rounded-none flex-1 block tracking-wide' required placeholder='Title' />
    </div>
</div>

<div className="mb-4">
    <label htmlFor="description" className='text-gray-900 font-medium text-sm block mb-1'>Description</label>
    <div className='flex'>

<textarea value={description} onChange={handleDescriptionOnChange} name="description" id="description" rows='4' className='bg-gray-50 border border-gray-300 rounded-e-lg focus:ring-blue-500 outline-none w-full min-w-0 p-2.5 focus:border-blue-500 ring-0 focus:0 placeholder-gray-400 rounded-none flex-1 block tracking-wide' required placeholder='Description'></textarea>
    </div>
</div>

<div className='text-center'>
<button className='w-[120px] text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-0 outline-none focus:outline-none font-medium rounded-md py-2.5' >add todo</button>
</div>


</form>

    </div>

</div>



    </section>
  )
}

export default TodoForm
