import React, { useEffect, useRef, useState } from 'react'
import Addtask from './Addtask'
import MyTask from './MyTask'

export default function TAsk({ item }) {
    const [task, setTask] = useState([])
    const addRef = useRef(null)
    const taskbody = useRef(null)
    const add2 = useRef(null);


    const addclick = () => {

        setTask([...task, "ok"])
        add2.current.classList.add("hidden")
        // add2.current.classList.add("flex")
        
    }
    const addTa = () => {
        setTask([...task, "ok"])
        addRef.current.classList.add("hidden")
        
    }

    useEffect(() => {
        if (taskbody.current) {
            taskbody.current.scrollLeft = taskbody.current.scrollWidth
        }


    }, [task]);

    return (
        <>


            {item.map((item, index) => (

                <div key={index} ref={taskbody} className='relative h-[90%] rounded-3xl m-3 bg-[#bebee3]  overflow-auto'>
                    {/* { nam} */}
                    <Addtask add={addTa} addRef={addRef} />
                    <div className="w-fit ">
                        <MyTask task={task} addclick={addclick} add2={add2} />
                    </div>

                </div>
            ))}
        </>
    )
}
