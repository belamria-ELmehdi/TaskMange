import React, { useRef, useState } from "react";
import TaskInpu from "./TaskInpu";
import AddTask2 from "./AddTask2";

export default function MyTask({ task, addclick, add2 }) {
  const [itemInput, setItemInput] = useState(task.map(() => []));
  const taskRef = useRef(null);

  const hidenX = () => {
    add2.current.classList.remove("hidden")
    add2.current.classList.add("flex")
    taskRef.current.classList.add("hidden")
  }

  return (
    <div className="flex m-3 gap-x-2">
      {task.map((task, ind) => (
        <div key={`${task}-${ind}`}
          className={`w-[40vh]   h-20 relative`} ref={taskRef}>
          <TaskInpu inputval={itemInput} setInputval={setItemInput} add2={add2} hidenX={hidenX} />

        </div>
      ))}

      <AddTask2 add2={add2} addclick={addclick} />
    </div>
  );
}

