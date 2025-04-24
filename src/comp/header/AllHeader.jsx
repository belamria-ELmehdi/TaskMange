import React, { useState } from 'react'
import AllNav from './NavBar/AllNav'
import UpHeader from './UpHeader'
import TAsk from './AllTAsk/TAsk'

export default function AllHeader() {
  const [item, setItem] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  //  recupere la valeur de l'input et le met dans le tableau
//  creation de l'item
  const handItem = () => {
   
    if (!isOpen) {
      // const name = prompt("entrer le nom de l'item")
      setItem([...item, "name"])

      
      
    }
    setIsOpen(true)
  }
  return (
    <div className='h-screen'>
      <AllNav Crée={handItem}/>
      <UpHeader/>

      <TAsk item={item}/>
    </div>
  )
}
