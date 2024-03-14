import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={className?className:'shadow-card w-[240px] h-[83px] rounded-sm px-4 py-2'}>
        {children}
    </div>
  )
}

export default Card