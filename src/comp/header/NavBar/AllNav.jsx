import React from 'react'
import NavCrée from './NavCrée'

export default function AllNav({Crée}) {
  return (
    <div className='bg-[#554d74] h-10 flex items-center justify-center'>
    <NavCrée Crée={Crée}/>
    </div>
  )
}
