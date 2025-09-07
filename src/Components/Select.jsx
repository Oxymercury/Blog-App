import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
},ref) {

    const id = useId();
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
            {/* Doing optional loop as may option doesnt have anything in it which me lead to app crash  */}
            {options?.map((option) => (<option key={option}>{option}</option>))}
        </select>
    </div>
  )
}
// one way to use forward ref here any syntax will work perfectly just dev thing 
export default React.forwardRef(Select);