import React from 'react'

const HeaderOne = ({customClasses, onClickEvent, text}) => {
  return (
    <h1 onClick={onClickEvent} className={customClasses}>{text}</h1>
  )
}

export default HeaderOne