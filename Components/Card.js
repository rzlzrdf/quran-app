import Link from 'next/link'
import React from 'react'
import style from './Card.module.css'

const Card = (props) => {
  return (
    
      <Link href={'/surah/' + props.id} id={props.id} className={style.card}>
        <h2 className='text-3xl font-semibold font-serif'>{props.arab}</h2>
        <h1 className='text-lg'>{props.latin}</h1>
        <p className='text-xs italic'>{props.arti}</p>
        <h3 className='text-xs'>Surah ke: {props.no}</h3>
      </Link>
  )
}

export default Card