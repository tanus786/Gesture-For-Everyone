import React from 'react'
import Gesture from '../../Data/Gesture.gif'
import Loading from '../../Data/Loading.gif'
const Loader = () => {
  return (
    <div className='bg-black h-screen'>
      <div className='flex justify-center items-center'>
      <img className='max-w-[20rem] max-h-[20rem] pt-12 mt-20' src={Gesture} alt="Gesture" />
      </div>
      <div className='flex justify-center items-center'>
      <img className='color-gray flex max-w-[90rem] max-h-[70rem]' src={Loading} alt="Gesture" />
      </div>
    </div>
  )
}
export default Loader
  