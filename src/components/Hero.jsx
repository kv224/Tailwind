import { FingerPrintIcon } from '@heroicons/react/outline'
import React from 'react'
import { CloudUploadIcon,
        DatabaseIcon,
        PaperAirplaneIcon,
        ServerIcon,
        } from '@heroicons/react/solid'
import bgimg from '../assets/bg-1.jpeg'

function Hero() {
  return (
    <>
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
          <div className='grid md:grid-cols-2 max-w-[1240px] sm:m-auto mt-24'>
              <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                  <p className='text-2xl'>Uniqu sequencing and production</p>
                  <p className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</p>
                  <p className='text-2xl'>Our tech Brand</p>
                  <button className='py-3 px-6 sm:w-[60%] my-4'>Get Stared</button>
              </div>
              <div>
                <img className='w-full' src={bgimg} alt="bg" />
              </div>
              <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[3%] sm:bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data services</p>
                <div className='flex justify-between px-4 flex-wrap'>
                    <p className='flex px-4 py-2 text-indigo-500'><CloudUploadIcon className='h-6' />App Security</p>
                    <p className='flex px-4 py-2  text-indigo-500'><DatabaseIcon className='h-6' />Dashborad design</p>
                    <p className='flex px-4 py-2 text-indigo-500'><ServerIcon className='h-6' />Cloud Data</p>
                    <p className='flex px-4 py-2 text-indigo-500'><PaperAirplaneIcon className='h-6' />API</p>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Hero