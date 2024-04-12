import React from 'react'
import video1 from '../../Data/Video/video1.mp4'
const Video = () => {
  return (
    <div>
      {/* <h1 className='text-white'>Hello</h1> */}
      <video autoPlay loop muted>
      <source src={video1} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video