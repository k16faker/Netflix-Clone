import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
        <div className='w-full text-white'>
          <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/36fcd3f1-f8ca-4eb5-95a8-4e156245cd54/KR-ko-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>

          </div>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
        </div>
        <SavedShows />
    </>
  )
}

export default Account