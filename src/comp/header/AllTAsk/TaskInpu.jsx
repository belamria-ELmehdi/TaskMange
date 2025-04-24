

import React, { useState, useRef, useEffect } from "react";
import NameList from "./NameList";

// مكوّن TaskInput لإدخال المهام وإدارة قائمة المهام مع أيقونة تحديد
export default function TaskInput({ inputval, setInputval, index,add2,hidenX}) {
    // حالة لتخزين قائمة المهام المدخلة مع حالة التحديد
    const [valueList, setValueList] = useState([]);
    const [inputName, setInputName] = useState("")
    const [heig, setheig] = useState(false)
    const NameP = useRef(null);
    const taskInp = useRef(null);


    // حالة لتخزين قيمة حقل الإدخال
    const [inputT, setInputT] = useState("");
    // مرجع لحقل الإدخال للتحكم في التركيز
    const inputRef = useRef(null);
    // مرجع للحاوية الداخلية التي تحتوي على حقل الإدخال والزر
    const divRef = useRef(null);
    // مرجع للعنصر span الذي يظهر زر "إضافة مهمة"
    const spanRef = useRef(null);
    // مرجع للحاوية الرئيسية للتمرير التلقائي
    const indref = useRef(null);
    // تأثير للتمرير التلقائي إلى الأسفل عند إضافة مهمة جديدة
    useEffect(() => {

        if (taskInp.current) {
            taskInp.current.scrollTop = taskInp.current.scrollHeight;
            let tall = taskInp.current.getBoundingClientRect().height
            setheig(tall)

            // indref
            if (heig >= 384.1860) {
                indref.current.classList.add("pr-0")

            }
        }

    }, [valueList]);

    // دالة لإظهار حقل الإدخال وإخفاء زر "إضافة مهمة"
    const addTask = () => {
        if (divRef.current && spanRef.current) {
            divRef.current.classList.remove("hidden");
            spanRef.current.classList.add("hidden");
            taskInp.current.classList.remove("hidden");
        }
    };

    // دالة لإضافة مهمة جديدة إلى القائمة
    const handleAddValue = (value) => {
        if (value.trim() === "") {
            alert("الإنبوت فاضي!");
            return; // منع إضافة قيمة فارغة
        }

        // إضافة المهمة مع حالة تحديد (غير محددة افتراضيًا)
        setValueList([...valueList, { text: value, checked: false, }]);

        // تحديث inputval في المكوّن الأب
        const newInput = [...inputval];
        newInput[index] = value;
        setInputval(newInput);

        // تصفير حقل الإدخال وإعادة التركيز عليه
        setInputT("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // دالة لمعالجة ضغط مفتاح Enter لإضافة المهمة
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddValue(e.target.value);
        }
    };

    // دالة لمعالجة النقر على زر "إضافة مهمتك"
    const handleClick = () => {
        handleAddValue(inputT);
    };

    // دالة لإزالة مهمة من القائمة بناءً على الفهرس
    const handleRemoveTask = (indexToRemove) => {
        setValueList(valueList.filter((_, i) => i !== indexToRemove));
    };

    // دالة لتحديد/إلغاء تحديد مهمة عند النقر على الأيقونة
    const checkInput = (indexToUpdate) => {

        setValueList(
            valueList.map((item, i) =>
                i === indexToUpdate ? { ...item, checked: !item.checked } : item
            )
        );
    };


  

    // إرجاع واجهة المستخدم للمكوّن
    return (
        <>
            {/* inputName, setInputName */}
            <NameList inputName={inputName} setInputName={setInputName} NameP={NameP} indref={indref} add2={add2} hidenX={hidenX}/>


            {/* // حاوية رئيسية للمكوّن مع تمرير تلقائي وتنسيق Tailwind */}
            <div
                // 

                className={`hidden p-3 bg-[#f1f2f4] rounded-[10px] relative w-[40vh] `}
                ref={indref}
            >
                <div className="flex gap-7 relative">
                    <h1 className="font-[600]  absolute w-[36vh] bg-[#f1f2f4] top-[-3px] py-[10px] " ref={NameP}></h1>
                    {/* زر لإظهار حقل الإدخال */}
                    <span
                        className="bg-blue-700 text-white text-[15px] capitalize px-3 py-1 rounded-[5px] cursor-pointer mt-[40px]"
                        onClick={addTask}
                        ref={spanRef}
                    >
                        إضافة مهمتك
                    </span>
                </div>

                {/*  */}
                <div className="scroll-tst hidden mt-[40px]  min-h-[50px] max-h-[60vh] overflow-auto scroll-smooth" ref={taskInp}>
                    {/* عرض قائمة المهام المدخلة مع أيقونة تحديد */}
                    {valueList.map((item, index) => (
                        <div
                            key={`${item.text}-${index}`} // مفتاح فريد لكل مهمة
                            className=" flex items-center rounded-[5px] py-2 pl-2 my-2 bg-white mr-2 shadow-[0px_1px_4px_#00000029]"
                        >
                            {/* أيقونة تحديد (بديل للـ checkbox) */}
                            <i
                                className={`fa-regular ${item.checked ? "fa-circle-check" : "fa-circle"} text-[13px] text-[#958cc8] cursor-pointer mr-2`}
                                onClick={() => checkInput(index)}
                            ></i>
                            {/* نص المهمة مع تنسيق مشروط بناءً على حالة التحديد */}
                            <span
                                className={`flex-1 ${item.checked ? "line-through font-bold text-gray-500" : "text-[#958cc8]"}`}
                                onClick={() => handleRemoveTask(index)} // إزالة المهمة عند النقر على النص
                            >
                                {item.text} {/* عرض نص المهمة */}
                                {item.ha}
                            </span>
                        </div>
                    ))}



                    {/* حاوية لحقل الإدخال والزر، مخفية افتراضيًا */}
                    <div className="hidden " ref={divRef}>
                        {/* حقل إدخال النصوص */}
                        <input
                            type="text"
                            placeholder="إضافة مهمتك"
                            value={inputT}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setInputT(e.target.value)}
                            ref={inputRef}
                            className="mb-2 w-full border-2 outline-none py-3 px-2 text-[15px] font-[400]"
                        />

                        {/* زر لإضافة المهمة */}
                        <button
                            onClick={handleClick}
                            className="bg-blue-700 text-white text-[15px] capitalize px-3 py-1 rounded-[5px] "
                        >
                            إضافة مهمتك
                        </button>
                    </div>
                </div>

            </div>

        </>
    );
}

// // map he is an a


