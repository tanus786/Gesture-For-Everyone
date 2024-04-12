import React from 'react'
import Gesture from '../../Data/Gesture.gif'
import { Cursor , useTypewriter } from 'react-simple-typewriter'
import Services from '../Services/Services'
import Video from '../Video/Video'
import Gesture1 from '../Gesture1/Gesture1'
import GestureForGamers from '../Gesture1/GestureForGamers'
const HomePage = () => {
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
      <h1 className='text-white text-7xl'>Welcome to</h1>
      <span style={{fontWeight:"bold"}} className='text-8xl text-purple-600'>
      {text}
      </span>
      <Cursor/>
      <p className='text-white text-xl px-5 mt-3'>Effortless Controls, Endless Capabilities with Gesture Technology.</p>
      <div className='px-5 mt-5'>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Learn More
        </span>
      </button>

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
      <img className='max-w-[20rem] max-h-[20rem] pt-10 mt-2' src={Gesture} alt="Gesture" />
      </div>
        </div>

      </div>
    </section>
    </header>
    <div>
      <Gesture1/>
      <GestureForGamers/>
      <Video/>
      <Services/>
    </div>
    </div>
  )
}

export default HomePage


