import React from 'react'

const Spinner = () => {
  return (
    <div className='w-[100vw] h-screen flex flex-col items-center justify-center'>
      <div className='spinner'></div>
      <div>Loading...</div>
    </div>
  )
}

export default Spinner