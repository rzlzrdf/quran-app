import Image from 'next/image'
import React from 'react'
// import gif from '/giphy.webp'

const Loading = () => {
     return (
          <div className='w-56 h-56 flex flex-row justify-center items-center'>
               <Image src={'/giphy.webp'} width={400} height={400} className='' alt='loading' />
          </div>
     )
}

export default Loading