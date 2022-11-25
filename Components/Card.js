import Link from 'next/link'
import React from 'react'

const Card = (props) => {
  return (
    <Link href={'/surah/' + props.id} id={props.id} className='
  bg-slate-200  text-slate-900 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 hover:text-white
    rounded-2xl shadow-xl text-center max-h-40 py-3 overflow-hidden'>
          <h2 className='text-3xl font-semibold font-serif'>{props.arab}</h2>
          <h1 className='text-lg'>{props.latin}</h1>
          <p className='text-xs italic'>{props.arti}</p>
          <h3 className='text-xs'>Surah ke: {props.no}</h3>
    </Link>
  )
}

export default Card