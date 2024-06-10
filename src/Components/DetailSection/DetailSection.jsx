import React from 'react'

const DetailSection = () => {
  return (
    <div className='w-full h-[110px] bg-main text-secondary flex items-center justify-around md:mt-10'>
        <div className='w-full flex flex-col md:flex-row text-center md:text-start items-center justify-center border-y-none border-secondary border-r-2 md:border-r-4'>
            <p className='md:pr-5 text-4xl md:text-7xl font-semibold'>10K+</p>
            <p className='text-xs md:text-lg font-medium'>Happy<br></br>Customers</p>
        </div>
        <div className='w-full flex flex-col md:flex-row text-center md:text-start  items-center justify-center border-y-none border-secondary border-r-2 md:border-r-4'>
            <p className='md:pr-5 text-4xl md:text-7xl font-semibold'>1.5K</p>
            <p className='text-xs md:text-lg font-medium'>Daily<br></br>Users</p>
        </div>
        <div className='w-full flex flex-col md:flex-row text-center md:text-start  items-center justify-center'>
            <p className='md:pr-5 text-4xl md:text-7xl font-semibold'>10K</p>
            <p className='text-xs md:text-lg font-medium'>Community<br></br>Members</p>
        </div>
    </div>
  )
}

export default DetailSection