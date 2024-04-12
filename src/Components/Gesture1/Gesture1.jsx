import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import GestureImg from '../../Data/Gesture_Img.png'
const Gesture1 = () => {
    const [text]= useTypewriter({
        words: ['Gesture'],
        loop:{},
      })
  return (
    <div>
        <header>
    <section>
      <div className='grid h-screen grid-cols-2'>
        <div className="">
        <div style={{margin:'50px'}} className='px-20'>
      <h1 className='text-purple-600 text-7xl'>Gesture 1.0</h1>
      {/* <span style={{fontWeight:"bold"}} className='text-8xl text-purple-600'>
      {text}
      </span> */}
      <Cursor/>
      <p className='text-white text-xl px-5 mt-3'>Experience the seamless integration of cutting-edge gesture recognition technology with our intuitive software, empowering you to effortlessly navigate your digital world with natural hand movements.</p>
      <div className='px-5 mt-5'>
      {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Learn More
        </span>
      </button> */}

      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Download
        </span>
      </button>

      </div>
    </div>
        </div>

        <div className="">
        <div className='flex justify-center items-center'>
      <img className='max-w-[20rem] max-h-[20rem] pt-10 mt-20' src={GestureImg} alt="Gesture" />
      </div>
        </div>

      </div>
    </section>
    </header>
    </div>
  )
}

export default Gesture1
