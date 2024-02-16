import { useId } from "react"
import React from 'react'

function Select({
    options,
    className,
    label,
  ...props
},ref
) {
    const id = useId()
  
  return (
    <div className=" w-full">
        {label && <label htmlFor={id} className="text-sm text-gray-500">{label}</label>}
        <select
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        >
            {options?.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>

    </div>
  )
}

export default React.forwardRef(Select)
