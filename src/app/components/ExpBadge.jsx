import React from 'react'
import Image from 'next/image'
const ExpBadge = () => {
  return (
  <div className='my-10'>
  <h1 className='text-4xl text-center font-bold'>Experience</h1>
     <div className='relative'>
   
   <Image
            src="https://static.vecteezy.com/system/resources/previews/016/587/240/original/green-and-gold-ribbon-banner-badge-transparent-background-free-png.png"
            alt="hero image"
            className='mx-auto rounded-full my-8'
            height={250}
            width={250}
         
          /> 
          <div className='absolute z-1 rounded top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 ' >

              <h3 className='text-2xl font-bold' style={{color:"#dfbf5a"}}>2.5Year</h3>
          </div>
          
  </div>
  </div>
   
  )
}

export default ExpBadge