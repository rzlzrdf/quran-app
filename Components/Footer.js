import Link from 'next/link'
import React from 'react'

const Footer = () => {
     return (
          <footer className='w-full h-20 text-center absolute bottom-0 '>
               <h3 className='font-mono text-white'>Made by Rizal Lazuardi Firdaus ❤️</h3>
               <Link href={'/credits'} className='font-serif text-yellow-300 font-bold text-lg'>See Credits</Link>
          </footer>
     )
}

export default Footer