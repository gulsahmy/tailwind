
import React from 'react'

const HoverAndFocus = () => {
  return (
    <>
    <div>HoverAndFocus</div>
    <button className='w-40 bg-sky-400 hover:bg-sky-500 hover:shadow-lg shadow-slate-100 text-slate-50 rounded-full py-2 mx-1'>Save</button>
    
    <button className='text-white bg-yellow-400 px-5 py-2.5 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:ring-pink-300 ml-2'>
        yellow
    </button>

    <div className='mt-3'>
        <input type="email" className='border border-gray-300 text-gray-900 focus:outline-red-500 block w-1/2 p-3 rounded-lg peer' />

        <p className='mt-2 text-red-600 text-sm invisible peer-invalid:visible'>Please provide a valid email adress</p>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default HoverAndFocus