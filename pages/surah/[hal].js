/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card'

const surah = () => {
     // eslint-disable-next-line react-hooks/rules-of-hooks

     const { query } = useRouter() || { query: { text: '' } }//get id from url parameter
     const nomer = query.hal
     // eslint-disable-next-line react-hooks/rules-of-hooks

     const [data, setData] = useState()
     const [ayahs, setAyahs] = useState([])

     console.log(query)
     useEffect(() => {
          axios.get(`https://quranapi.idn.sch.id/surah/${nomer ? nomer : ''}`)
               .then(res => {
                    setData(res.data)
                    setAyahs(res.data.ayahs)
               })

     }, [])

     return (

          <div className='max-w-100vw min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black relative flex flex-col justify-around py-20 gap-10 items-center'>
               <div className='w-full flex justify-between items-start px-10'>
                    <Link href='/surah' className='p-2 pl-4 text-lg rounded-l-full text-center font-bold bg-white'>Back</Link>
                    <input type={'search'} className='w-1/5 max-sm:w-3/4 p-3 pl-6 bg-transparent border border-teal-700 rounded-full text-white font-xl' placeholder='Cari Nama atau Nomor Surah' />
               </div>
               <div className='w-full h-36 flex flex-col justify-center items-center px-12 '>
                    <h1 className='text-8xl font-semibold font-serif 
                    from-teal-300 to-green-100 bg-gradient-to-l text-transparent bg-clip-text 
                    '>
                         {data ? data.asma : 'Ayah'}
                    </h1>
                    <h1 className='text-3xl text-white font-serif'>{data ? data.name : 'Nama Ayahs'}</h1>
                    <h1 className='text-xl text-lime-100 font-light font-serif'>({data ? data.translationId : '0'})</h1>
               </div>
               <div className='w-full min-h-full'>
                    {
                         ayahs ? ayahs.map(items => {
                              return (
                                   <div key={items.verseId} className='flex flex-row justify-around gap-16 px-20'>
                                        <div className='w-1/4 h-fit flex flex-col gap-3'>
                                             <h1 className='text-xl text-white text-justify font-serif' key={items.verseId}><span>{items.verseId}. </span>{items.indoText}</h1>
                                             <audio src={items.audio} controls className='w-2/3 h-6'></audio>
                                        </div>
                                        <h1 className='text-6xl text-white font-arab w-3/4 h-fit text-end leading-relaxed' key={items.verseId}>{items.ayahText}</h1>
                                   </div>
                              )
                         }) : '2'
                    }

               </div>
          </div>
     )
}

export default surah