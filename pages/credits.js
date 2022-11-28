import Link from 'next/link'
import React from 'react'
import Loading from '../Components/loading'

const credits = () => {
     return (
          <div className='max-w-100vw min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black relative flex flex-col gap-10 justify-center items-center text-center'>
               <div className='w-full flex justify-between items-start px-10'>
                    <Link href='/' className='p-2 pl-4 text-lg rounded-l-full font-bold bg-white'>Back</Link>
               </div>
               <h1 className='text-6xl text-white font-bold'>Credits</h1>
               <p className='text-xl text-white'>API by<Link className='hover:text-yellow-300' href={'https://quranapi.idn.sch.id/'}> https://quranapi.idn.sch.id/</Link></p>
               <p className='text-xl text-white'>Icons and Ilustration by <Link className='hover:text-yellow-300' href='https://iconscout.com/illustrations/quran'>https://icons8.com/</Link></p>
               <p className='text-xl text-white'>Animation gif by @vghversicherungen<Link className='hover:text-yellow-300' href='https://giphy.com/gifs/vghversicherungen-white-loading-dots-4ZRPSNsWgKhwAH5860'>https://giphy.com/gifs/</Link></p>
          </div>
     )
}

export default credits