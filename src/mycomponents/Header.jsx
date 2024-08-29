import React from 'react'
import image from '../assets/react.svg'
export default function Header() {
  return (
    <div className='bg-gradient-to-l rounded-md from-blue-500 to-blue-700 p-4'>
    <header>
       <img src={image} className=' w-10'/>
       <h3 className=' text-3xl'>Quiz App</h3>
        
    </header>
    </div>
  )
}
