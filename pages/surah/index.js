/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card'

const surah = () => {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [data, setData] = useState([])
     const [search, setSearch] = useState("")
     // eslint-disable-next-line react-hooks/rules-of-hooks
     useEffect(() => {
          axios.get('https://quranapi.idn.sch.id/surah')
               .then(
                    res => {
                         console.log(res)
                         setData(res.data.data)
                    }
               )
     }, [])

     return (
          <>
               <Head>
                    <title>eQuran by Rizal</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/islamic-mosque.svg" />
               </Head>
               <div className='max-w-100vw min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black relative py-20 '>
                    <div className='w-full flex justify-between items-start px-10'>
                         <Link href='/' className='p-2 pl-4 text-lg rounded-l-full text-center font-bold bg-white'>Back</Link>
                         <input onChange={event => setSearch(event.target.value)} type={'search'}
                              className='w-1/4 max-sm:w-3/4 p-3 px-8 bg-transparent border border-teal-700 rounded-full text-white font-xl' placeholder='Cari..' />
                    </div>
                    <h1 className='w-full text-center mb-24 text-7xl text-white font-bold shadow-lg from-teal-300 to-green-100 bg-gradient-to-l text-transparent bg-clip-text'>
                         Surah
                    </h1>
                    <div className='min-h-3/4 w-full cursor-pointer grid grid-cols-6 gap-10 px-10 max-lg:grid-cols-3 max-md:gap-5 max-sm:grid-cols-2'>
                         {data.filter(val => {
                              if (search == '') {
                                   return val
                              } else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                                   return val
                              }
                         }).map(items => {
                              return <Card key={items.number} id={items.number} latin={items.name} arab={items.asma} no={items.number} arti={items.translationId} />
                         })}

                    </div>
               </div>
          </>
     )
}

export default surah