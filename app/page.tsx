"use client"

import Booking from '@/components/Booking/Booking'
import Image from 'next/image'
export default function Home() {
  return (
    <div className=''>
      <div className='grid grid-col-1 md:grid-cols-3'>
        <div className='bg-yellow-500'>
          <Booking/>
        </div>
        <div className='col-span-2 bg-yellow-300'>
          Map
        </div>
      </div>
    </div>
  )
}
