import React from 'react'

const CustomButton = ({title}) => {
  return (
    <button data-aos="fade-down" className='bg-blue-500 text-white px-5 py-2 text-md'>
        {title}
    </button>
  )
}

export default CustomButton