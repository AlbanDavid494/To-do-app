import React from 'react'

const TodoLists = ({todos, handleDelete}) => {
  return (
    <section className=''>
 <section className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-4 m-6'>
      
{todos.map(todo => (
  <div key={todo.id} className='bg-transparent bg-gradient-to-tl to-emerald-700 from-sky-500 via-yellow-200 rounded-md p-3 object-cover'>

  <div className='flex justify-between'>
  <p className='text-white tracking-tighter font-semibold text-2xl line-clamp-1 '>{todo.title}</p>
  <input type="checkbox" className='' name="" id="" />
  </div>
 
  <p className='text-gray-950 line-clamp-3 font-semibold mt-2'>{todo.description}</p>

<div className='flex justify-end my-4'>
<button className='bg-red-500 text-white w-14 h-10 rounded-md' onClick={handleDelete(todo.id)}>delete</button>
</div>
  
</div>
))}

    </section>
    </section>
   
  )
}

export default TodoLists
