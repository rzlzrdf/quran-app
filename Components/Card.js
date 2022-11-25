import Link from 'next/link'
import React from 'react'

const Card = (props) => {
  return (
    
      <Link href={'/surah/' + props.id} id={props.id} className={'px-3 py-5 bg-teal-900 shadow-xl text-white text-center rounded-3xl'}>
        <h2 className='text-3xl font-semibold font-serif'>{props.arab}</h2>
        <h1 className='text-lg'>{props.latin}</h1>
        <p className='text-xs italic'>{props.arti}</p>
        <h3 className='text-xs'>Surah ke: {props.no}</h3>
      </Link>
  )
}

export default Card