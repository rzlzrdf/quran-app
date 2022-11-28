import Link from 'next/link'
import React from 'react'

const Footer = () => {
     return (
          <footer className='basis-full h-fit p-0 text-center'>
               <h3 className='font-mono text-white'>Made by Rizal Lazuardi Firdaus ❤️</h3>
               <Link href={'/credits'} style={{color:'gold'}} className='font-serif text-yellow-300 font-bold text-lg'>See Credits</Link>
          </footer>
     )
}

export default Footer