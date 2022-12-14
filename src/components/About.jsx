import React from 'react'

const About = () => {
  return (
    <div className='w-full my-16 sm:my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers</h2>
                <p className='tet-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed o
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold  text-indigo-600'>100%</p>
                <p className='text-gray-400'>Completion</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold  text-indigo-600'>24/7</p>
                <p className='text-gray-400'>Delivery</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold  text-indigo-600'>100K</p>
                <p className='text-gray-400'>Transaction</p>
            </div>
        </div>
    </div>
  )
}

export default About