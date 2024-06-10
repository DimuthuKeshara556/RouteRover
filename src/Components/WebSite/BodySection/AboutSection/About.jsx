import React from 'react'
import cloudImage from "../../../../assets/images/cloud.png";

const About = () => {
  return (
    <div id="about"  className='w-full h-screen flex flex-col items-center justify-center relative '>
    <img className='w-[180px] md:w-[380px] absolute left-4 top-32 md:left-10 md:top-24  rightcloud' src={cloudImage} alt='cloud'/>
    <img className='w-[220px]  md:w-[380px] absolute right-2 bottom-36 md:right-10 md:bottom-10 -z-10' src={cloudImage} alt='cloud'/>
    <div class="relative flex justify-center items-center">
    <p className='font-StyleScript text-[#e2e0e0] text-8xl md:text-[100px]'>RouteRover</p>
    <p className='absolute text-4xl font-Raleway font-bold'>RouteRover</p>
    </div>
    <p className='w-full px-10 md:px-0 md:w-[700px] text-center text-md font-medium  mt-10'>Embark on Your Next Adventure with <span className='text-xl'>RouteRover</span>. Discover breathtaking trails, track your progress, and explore the great outdoors like never before. Whether you're a seasoned hiker or just starting out, our platform provides the tools 
        and guidance you need to navigate with confidence. Join our community of outdoor enthusiasts and start your journey today!</p>
    </div>
  )
}

export default About