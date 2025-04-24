import React from 'react'

export default function Addtask({add,addRef}) {
  
    
  return (
    <div onClick={add} ref={addRef} className=' cursor-pointer select-none left-1/2 top-1/2 absolute -translate-y-1/2 translate-x-[-50%] bg-[#ffffff59] text-[5vh] py-4 px-6 rounded-xl shadow-[0_0_10px_#ffffff47]'> 
      +
    </div>
  )
}
