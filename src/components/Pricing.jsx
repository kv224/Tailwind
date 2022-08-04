import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'

const pricing = () => {
  return (
    <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'>
        </div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 '>
                <h2 className='uppercase text-3xl'>Pricing</h2>
                <h3 className='font-bold text-5xl text-white py-8'>The right price for your research</h3>
                <p className=' text-4xl'>Lorem ipsum dolar, sit </p>
            </div>
            <div className='grid md:grid-cols-2 '>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
                    <span className='uppercase bg-indigo-900 text-indigo-200 py-1 px-3 rounded-2xl text-sm'>Standard</span>
                    <div>
                        <p className='text-6xl font-bold text-black py-4 flex'>$49
                        <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span> </p>
                    </div>
                    <p className='text-2xl py-8 text-slate-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='text-2xl relative '>
                        <p className='flex py-4'> <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <p className='flex py-4' > <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <p className='flex py-4'> <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <p className='flex py-4'> <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <p className='flex py-4'> <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <button className='w-full rounded py-4 my-4'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
                    <span className='uppercase bg-indigo-900 text-indigo-200 py-1 px-3 rounded-2xl text-sm'>Premium</span>
                    <div>
                        <p className='text-6xl font-bold text-black py-4 flex'>$99
                        <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span> </p>
                    </div>
                    <p className='text-2xl py-8 text-slate-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='text-2xl relative '>
                        <p className='flex py-4'> <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <p className='flex py-4' > <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <p className='flex py-4'> <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <p className='flex py-4'> <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <p className='flex py-4'> <CheckIcon className="w-8 mr-5 text-green-600"/>Lorem Ipsum Dolor </p>
                        <button className='w-full rounded py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default pricing