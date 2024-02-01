import React from 'react'

const HeaderThree = ({customClasses, onClickEvent, text}) => {
  return (
    <h3 onClick={onClickEvent} className={customClasses}>{text}</h3>
  )
}

export default HeaderThree