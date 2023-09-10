import React from 'react'

function AutoCompleteAdress() {
  return (
    <div className='mt-3'>
     <div>
      <label className='text-gray-400'>Current Location</label>
      <input type="text"
        className='bg-white p-1
        border-[1px] w-full 
        rounded-md online-none
        focus:border-yellow-300'
      />
     </div>
     <div className='mt-3'>
      <label className='text-gray-400'>Destination</label>
      <input type="text"
        className='bg-white p-1
        border-[1px] w-full 
        rounded-md online-none
        focus:border-yellow-300'
      />
     </div>
    </div>
  )
}

export default AutoCompleteAdress