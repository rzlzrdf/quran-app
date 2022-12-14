/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../Components/Footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={'max-w-100vw min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex flex-col justify-center gap-20 items-center'}>
      <Head>
        <title>eQuran by Rizal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/islamic-mosque.svg" />
      </Head>

      <main className={'relative flex flex-wrap justify-center items-center'}>
        <div className='max-w-full h-11/12 flex flex-row flex-wrap'>
          <div className='basis-1/2 flex flex-col justify-center items-end max-md:order-2 mb-10 max-md:basis-full max-md:items-center'>
            <h1 className='text-5xl text-end font-bold max-md:text-2xl max-md:text-center
            from-yellow-400 to-yellow-600 bg-gradient-to-l text-transparent bg-clip-text 
            leading-snug w-3/4 pt-10 pb-6'>
              Take a few moments to read the quran
            </h1>
            <Link href='/surah' className='bg-gradient-to-l from-yellow-300 to-yellow-600 hover:from-green-400 hover:to-teal-600 text-gray-50 font-bold px-12 py-3 rounded-full'>
              Read Now
            </Link>
          </div>
          <div className='basis-1/2 flex flex-col justify-center items-start max-md:basis-full max-md:items-center'>
            <Image width={400} height={400} src={'/al-quran.png'} className='w-1/2 min-w-300px pt-0 drop-shadow-sm ' alt='e-quran' />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
