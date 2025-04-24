import React, { useRef, useState } from 'react';

export default function NameList({inputName, setInputName,NameP,indref, add2,hidenX}) {

  // const [inputName, setInputName] = useState("");
  // const NameP = useRef(null);
  const DivInp = useRef(null);

  

  const subName = (e) => {
    
    if (inputName.trim() !== "") {
      let text = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);
      NameP.current.innerText = text;
      add2.current.classList.remove("hidden")
      add2.current.classList.add("flex")
      DivInp.current.classList.add("hidden");
    }else{
      return
    }

    if (inputName.length >= 1) {
      indref.current.classList.remove("hidden");
    }
    

   
   
  }
  return (
    <div className=" bg-[#f1f2f4] rounded-2xl py-2  px-4 w-[40vh] flex flex-col gap-2 "ref={DivInp} >
      {/* <h1 ref={NameP}></h1> */}
    
      {/* <div className="grid gap-3" > */}
      <input type="text"
      placeholder='Saisissez le nom de la liste'
       onKeyDown={(e => {
        if (e.key === "Enter") {
          subName()
        }})}
      onChange={(e) => setInputName(e.target.value)}
        value={inputName}
         className="border-2 px-2 w-full outline-none" />
      <div className="flex items-center gap-x-3">

        <button onClick={subName} className=" p-1 capitalize font-[600] text-[13px] bg-blue-500 text-white rounded hover:bg-blue-600">ajouter uneliste</button>
        <i onClick={hidenX} class="fa-solid cursor-pointer fa-xmark  text-[20px]"></i>
      </div>
      </div>

    // </div>
  );
}