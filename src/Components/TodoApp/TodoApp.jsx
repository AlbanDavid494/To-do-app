import React, { useState } from 'react'
import { FaRegBell } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import TodoForm from '../TodoForm/TodoForm';
import TodoLists from '../TodoLists/TodoLists'

const TodoApp = () => {

 let dateId = new Date()
    let forgedId = dateId.getMilliseconds()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

const [isClicked, setIsClicked] = useState(false)
const handleOnClick = () => {
    setIsClicked(true)
}    

    const handleTitleChange = (e) => {
setTitle(e.target.value)

    }
    const handleDescriptionOnChange = (e) => {
        setDescription(e.target.value)
    }

    const [todos, setTodos] = useState([])


const handleSubmit = (e) => {
e.preventDefault()
setTodos([{
    title: title,
    description: description,
    id: forgedId
},
    ...todos
])
setTitle('')
setDescription('')
setIsClicked(false)
}


const handleDelete = (todoId) => {
    setTodos(todos.filter(t => t.id !== todoId))
}



  return (
    <section className='h-screen max-h-screen bg-black lg:p-12'>
        
        <header className='flex justify-between items-center p-6 lg:p-8'>
            <div>
        <h1 className='text-3xl font-extrabold text-white md:text-2xl lg:3xl text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-700'>Future Planner </h1>
        <p className='text-white font-mono'>Your future, planned to perfection.</p>
            </div>

            <div className='relative block'>
            <FaRegBell className='text-2xl text-white' />
           <span className='inline-flex text-black justify-center items-center absolute -top-1 -right-[7px] bg-white font-bold rounded-full w-4 h-4'>{todos.length}</span>
            </div>
                
        </header>

        {/* user name */}
        <div className='lg:mt-9 lg:p-0 px-6'>
            <p className='text-4xl text-white font-mono'>Hello, <span className='tracking-tight font-semibold bg-gradient-to-tl from-sky-500 to-white bg-clip-text text-transparent via-emerald-500 animate-pulse'>Dear</span></p>
        </div>


{/* hero section */}
        <section className='flex justify-center items-center text-white'>

<div className='mt-8 lg:p-0 p-8'>
<h3 className='text-2xl font-bold'>Transform your to-do list into a roadmap to success with <i>Future Planner</i>. </h3>
<p className=''><i>"Take control of your time and unlock your full potential. Plan, organize and achieve your goals".</i></p>
<button className='flex justify-center items-center w-[120px] text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-0 outline-none focus:outline-none font-medium rounded-md py-2 mt-2' onClick={handleOnClick}>create Todo <FaPlus className='ml-1 text-[14px]'  /> </button>
</div>

        </section>

       
{
    isClicked ? <TodoForm title={title} description={description} handleTitleChange={handleTitleChange} handleDescriptionOnChange={handleDescriptionOnChange} handleSubmit={handleSubmit} />  : <TodoLists todos={todos} handleDelete={handleDelete} />
}
       


    </section>
  )
}

export default TodoApp
