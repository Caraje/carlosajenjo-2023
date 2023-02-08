import React from 'react'

export const Icons = ({ icon, color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 500 500'
      fill={color}
    >
      <path d={icon} />
    </svg>
  )
}

export default Icons
