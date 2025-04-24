import React from 'react'

export default function AddTask2({add2,addclick,addRef}) {
  return (
    <div onClick={addclick}  ref={add2}  className='hidden cursor-pointer bg-[#ffffff3d] items-center gap-x-2 text-white font-[500] rounded-lg h-[40px] py-3 px-4 w-[max-content]'>
      <span className='text-[20px]'>+</span>
      <span>Ajouter une autre liste</span>
    </div>
  )
}
// box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;